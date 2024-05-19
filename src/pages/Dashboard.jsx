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
  const { userId } = useParams(); // get id from url - result is string, we must cast into Number
  const userIdNumber = Number(userId);
  const { currentUserId } = useUser(); // get the current userId from context, allows us to compare with url id parameter to manage security of datas

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        // if user manually change url id by another id
        if (userIdNumber !== currentUserId) {
          throw new Error();
        }
        const userById = await getUserById(userIdNumber);
        const userActivityById = await getUserActivityById(userIdNumber);
        const userAverageSessionsById = await getUserAverageSessionsById(
          userIdNumber
        );
        const userPerformanceById = await getUserPerformanceById(userIdNumber);
        setUser(userById);
        setUserActivity(userActivityById);
        setUserAverageSessions(userAverageSessionsById);
        setUserPerformance(userPerformanceById);
      } catch (error) {
        setError(true); // allows to show error message
      }
      setIsLoading(false);
    };

    fetchDatas();
  }, [userIdNumber, currentUserId]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <ErrorMessage />
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
