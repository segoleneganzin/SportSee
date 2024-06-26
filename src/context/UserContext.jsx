import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const UserContext = createContext(); // Creating a context for user-related data.

/**
 * Use into main.jsx
 * Provider component for managing user authentication status and user id.
 * This allows us to manage the application's security and display or not display elements according to status and id.
 * @param {object} props
 * @param {ReactNode} props.children - Child components to be wrapped by the provider.
 * @returns {JSX.Element}
 */
export const UserProvider = ({ children }) => {
  const navigate = useNavigate();

  // State for storing the current user's ID.
  const [currentUserId, setCurrentUserId] = useState(() =>
    JSON.parse(localStorage.getItem('currentUserId'))
  );

  // State for storing the authentication status.
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuth') !== null
      ? JSON.parse(localStorage.getItem('isAuth'))
      : false
  );

  // Effect for updating local storage when the authentication status changes.
  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  // Effect for updating local storage when the current user ID changes.
  useEffect(() => {
    localStorage.setItem('currentUserId', currentUserId);
  }, [currentUserId]);

  // use to login user and set isAuth to true and user ID
  const login = (userIdLog) => {
    setCurrentUserId(userIdLog);
    setIsAuth(true);
  };

  // use to logout user and set isAuth to false and user ID to null
  const logout = () => {
    setIsAuth(false);
    setCurrentUserId(null);
    navigate('/');
  };

  // console.log('userId => ' + currentUserId + ' : ' + typeof currentUserId);
  // console.log('isAuth => ' + isAuth + ' : ' + typeof isAuth);

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
