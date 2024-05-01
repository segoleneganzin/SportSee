import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  getUserById,
  getUserActivityById,
  getUserAverageSessionsById,
  getUserPerformanceById,
} from '../services/api.jsx';
import DashboardHeader from '../layouts/DashboardHeader';
import Activity from '../components/Activity.jsx';
import AverageSessions from '../components/AverageSessions.jsx';
import Performance from '../components/Performance.jsx';
import TodayScore from '../components/TodayScore.jsx';
import UserDatas from '../layouts/UserDatas.jsx';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const { userId } = useParams(); // get id from url - result is string, we must cast into Number
  const navigate = useNavigate(); // manage redirection in case of unknown userId

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setError(false);
        const userById = await getUserById(Number(userId));
        const userActivityById = await getUserActivityById(Number(userId));
        const userAverageSessionsById = await getUserAverageSessionsById(
          Number(userId)
        );
        const userPerformanceById = await getUserPerformanceById(
          Number(userId)
        );
        setUser(userById);
        setUserActivity(userActivityById);
        setUserAverageSessions(userAverageSessionsById);
        setUserPerformance(userPerformanceById);
        setIsLoading(false);
      } catch (error) {
        setError(true);
      }
    };
    fetchDatas();
  }, [userId]);

  useEffect(() => {
    // if id doesn't match with any user, redirecting to 404 error page
    if (error) {
      navigate('/erreur404');
    }
  }, [error, navigate]);

  return isLoading ? (
    // TODO loader
    <main>Loading</main>
  ) : (
    <main>
      <DashboardHeader user={user} />
      <div className='dashboard__content'>
        <div className='dashboard__content-container'>
          <Activity userActivity={userActivity} />
          <AverageSessions userAverageSessions={userAverageSessions} />
          <Performance userPerformance={userPerformance} />
          <TodayScore user={user} />
        </div>
        <UserDatas user={user} />
      </div>
    </main>
  );
};

export default Dashboard;
