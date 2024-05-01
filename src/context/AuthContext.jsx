import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const AuthContext = createContext();

// create provider component
export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  // initial state of user and userId
  const [isAuth, setIsAuth] = useState(
    localStorage.getItem('isAuth') !== null
      ? localStorage.getItem('isAuth')
      : false
  );
  useEffect(() => {
    localStorage.setItem('isAuth', isAuth);
  }, [isAuth]);

  const login = () => {
    // Logique d'authentification
    setIsAuth(true);
  };

  const logout = () => {
    // Logique de déconnexion
    setIsAuth(false);
    navigate('/');
  };
  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default AuthContext;
