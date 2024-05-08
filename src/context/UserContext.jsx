import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserContext = createContext();

// create provider component
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  const [currentUserId, setCurrentUserId] = useState(() =>
    JSON.parse(localStorage.getItem('currentUserId'))
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
    localStorage.setItem('currentUserId', currentUserId);
  }, [currentUserId]);

  const login = (userIdLog) => {
    setCurrentUserId(userIdLog);
    setIsAuth(true);
  };

  const logout = () => {
    setIsAuth(false);
    setCurrentUserId(null);
    navigate('/');
  };

  console.log('userId => ' + currentUserId + ' : ' + typeof userId);
  console.log('isAuth => ' + isAuth + ' : ' + typeof isAuth);

  return (
    <UserContext.Provider
      value={{ currentUserId, setCurrentUserId, isAuth, login, logout }}
    >
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
