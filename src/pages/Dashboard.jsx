import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  getUserById,
  getUserActivityById,
  getUserAverageSessionsById,
  getUserPerformanceById,
} from '../services/api.jsx';
import DashboardHeader from '../components/DashboardHeader';
import Activity from '../components/Activity.jsx';
import AverageSessions from '../components/AverageSessions.jsx';
import Performance from '../components/Performance.jsx';
import TodayScore from '../components/TodayScore.jsx';
import UserDatas from '../layouts/UserDatas.jsx';
import { useUser } from '../utils/hooks/useUser.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';

/**
 * Dashboard page (Accueil)
 * On this page, user can view all his charts.
 * All data are retrives with getters api functions (read)
 * @returns {JSX.Element}
 */
const Dashboard = () => {
  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "Une erreur s'est produite ..."
  );
  const { userId } = useParams(); // get id from url - result is string, we must cast into Number
  const userIdNumber = Number(userId);
  const { currentUserId } = useUser(); // get the current userId from context, allows us to compare with url id parameter to manage security of datas

  /**
   * @param {object} userById
   * @param {object} userActivityById
   * @param {object} userAverageSessionsById
   * @param {object} userPerformanceById
   */
  const updateUserStates = (
    userById,
    userActivityById,
    userAverageSessionsById,
    userPerformanceById
  ) => {
    setUser(userById);
    setUserActivity(userActivityById);
    setUserAverageSessions(userAverageSessionsById);
    setUserPerformance(userPerformanceById);
  };

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        // if user manually change url id by another id
        if (userIdNumber !== currentUserId) {
          throw new Error();
        }
        const [
          userById,
          userActivityById,
          userAverageSessionsById,
          userPerformanceById,
        ] = await Promise.all([
          // resolved when all promises are resolved - runs several asynchronous tasks in parallel
          getUserById(userIdNumber),
          getUserActivityById(userIdNumber),
          getUserAverageSessionsById(userIdNumber),
          getUserPerformanceById(userIdNumber),
        ]);
        updateUserStates(
          userById,
          userActivityById,
          userAverageSessionsById,
          userPerformanceById
        );
      } catch (error) {
        if (error.message === 'Failed to fetch') {
          setErrorMessage('Le serveur est indisponible ...');
        }
        setError(true); // allows to show error message
      } finally {
        setIsLoading(false); // executed, however there are error or not
      }
    };

    fetchDatas();
  }, [userIdNumber, currentUserId]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <ErrorMessage message={errorMessage} />
  ) : (
    <>
      <DashboardHeader user={user} />
      <div className='dashboard__content'>
        <Activity userActivity={userActivity} />
        <UserDatas user={user} />
        <AverageSessions userAverageSessions={userAverageSessions} />
        <Performance userPerformance={userPerformance} />
        <TodayScore user={user} />
      </div>
    </>
  );
};

export default Dashboard;
