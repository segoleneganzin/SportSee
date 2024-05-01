import { createContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

// create provider component
export const UserProvider = ({ children }) => {
  const [userId, setUserId] = useState(() => localStorage.getItem('userId'));

  useEffect(() => {
    localStorage.setItem('userId', userId);
  }, [userId]);

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default UserContext;
