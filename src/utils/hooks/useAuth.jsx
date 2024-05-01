import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

// personalized hook for request user context
export const useAuth = () => {
  return useContext(AuthContext);
};
