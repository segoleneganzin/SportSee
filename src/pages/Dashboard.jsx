import { useEffect, useState } from 'react';
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
import UserDatas from '../components/UserDatas.jsx';

const Dashboard = () => {
  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const userId = 18;
  useEffect(() => {
    const fetchDatas = async () => {
      try {
        setError(false);
        const userById = await getUserById(userId);
        const userActivityById = await getUserActivityById(userId);
        const userAverageSessionsById = await getUserAverageSessionsById(
          userId
        );
        const userPerformanceById = await getUserPerformanceById(userId);
        setUser(userById);
        setUserActivity(userActivityById);
        setUserAverageSessions(userAverageSessionsById);
        setUserPerformance(userPerformanceById);
        setIsLoading(false);
      } catch (error) {
        console.log('error : ', error);
        setError(true);
      }
    };
    fetchDatas();
  }, [userId]);

  return error ? (
    <p>Utilisateur introuvable</p>
  ) : isLoading ? (
    <p>Loading</p>
  ) : (
    <main>
      <DashboardHeader user={user} />
      <div className='dashboard__content'>
        <Activity userActivity={userActivity} />
        <AverageSessions userAverageSessions={userAverageSessions} />
        <Performance userPerformance={userPerformance} />
        <TodayScore user={user} />
        <UserDatas user={user} />
      </div>
    </main>
  );
};

export default Dashboard;
