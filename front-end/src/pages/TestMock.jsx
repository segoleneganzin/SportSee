/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import {
  getUserById,
  getUserActivityById,
  getUserAverageSessionsById,
  getUserPerformanceById,
} from '../services/appService.jsx';

const TestMock = () => {
  const [user, setUser] = useState({});
  const [userActivity, setUserActivity] = useState({});
  const [userAverageSessions, setUserAverageSessions] = useState({});
  const [userPerformance, setUserPerformance] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const userId = 12;

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const user = await getUserById(userId);
        const userActivity = await getUserActivityById(userId);
        const userAverageSessions = await getUserAverageSessionsById(userId);
        const userPerformance = await getUserPerformanceById(userId);
        setUser(user);
        setUserActivity(userActivity);
        setUserAverageSessions(userAverageSessions);
        setUserPerformance(userPerformance);
        setIsLoading(false);
      } catch (error) {
        console.log('error : ', error);
      }
    };
    fetchDatas();
  }, []);

  return isLoading || !user ? (
    <p>Loading</p>
  ) : (
    <div>
      <h1>Test mocked Datas</h1>
      <h2>User informations</h2>
      <p>{user.firstName + ' ' + user.lastName}</p>
      <p>{user.age + ' ans'}</p>
      <p>{user.todayScore}</p>
      <h2>User Activity</h2>
      <ul>
        {userActivity.sessions.map((session, index) => (
          <li key={index}>
            <p>
              Date : {session.day} <br />
              Kg : {session.kilogram} <br />
              Calories : {session.calories} <br />
            </p>
          </li>
        ))}
      </ul>
      <h2>User average session</h2>
      <ul>
        {userAverageSessions.sessions.map((session, index) => (
          <li key={index}>
            <p>
              Day : {session.day} <br />
              Session duration : {session.sessionLength} <br />
            </p>
          </li>
        ))}
      </ul>
      <h2>User performance</h2>
      <table>
        <thead>
          <tr>
            <th>Kind</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {userPerformance.data.map((data, index) => (
            <tr key={index}>
              <td>{userPerformance.kind[data.kind]}</td>
              <td>{data.value} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TestMock;
