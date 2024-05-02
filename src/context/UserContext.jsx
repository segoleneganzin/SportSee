import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserContext = createContext();

// create provider component
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [userId, setUserId] = useState(() =>
    JSON.parse(localStorage.getItem('userId'))
  );

  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuth') !== null
      ? JSON.parse(localStorage.getItem('isAuth'))
      : false
  );

  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  const login = (userIdLog) => {
    setUserId(userIdLog);
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
    setUserId(null);
    navigate('/');
  };

  console.log('userId => ' + userId + ' : ' + typeof userId);
  console.log('isAuth => ' + isAuth + ' : ' + typeof isAuth);

  return (
    <UserContext.Provider value={{ userId, setUserId, isAuth, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
