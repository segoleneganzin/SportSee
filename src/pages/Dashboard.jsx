import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate(); // manage redirection in case of unknown userId
  const { currentUserId } = useUser(); // get the current userId from context, allows us to compare with url id parameter to manage security of datas

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setError(false);
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
        setIsLoading(false); // allows to replace loader by datas
      } catch (error) {
        setIsLoading(false);
        setError(true); // allows to show error message
      }
    };
    // if url userId is different of current userId, then navigate to currentUser dashboard
    if (userIdNumber !== currentUserId) {
      navigate(`/accueil/${currentUserId}`);
    } else {
      fetchDatas();
    }
  }, [userIdNumber, currentUserId, navigate]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <div className='dashboard page-content'>
      <h1 className='title1'>Oups !</h1>
      <p className='subtitle'>
        Une erreur s&apos;est produite... <br />
        Veuillez recharger la page.
      </p>
    </div>
  ) : (
    <div className='dashboard page-content'>
      <DashboardHeader user={user} />
      <div className='dashboard__content'>
        <Activity userActivity={userActivity} />
        <UserDatas user={user} />
        <AverageSessions userAverageSessions={userAverageSessions} />
        <Performance userPerformance={userPerformance} />
        <TodayScore user={user} />
      </div>
    </div>
  );
};

export default Dashboard;
