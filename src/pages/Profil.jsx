import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useUser } from '../utils/hooks/useUser.jsx';
import Loader from '../components/Loader.jsx';
import ErrorMessage from '../components/ErrorMessage.jsx';
import { checkValidUrlID } from '../utils/functions/checkValidUrlID.jsx';

/**
 * Profil page
 * On this page, user can logout
 * @returns {JSX.Element}
 */
const Profil = () => {
  const { userId } = useParams(); // get id from url - result is string
  const { logout } = useUser(); // get the logout function of user context to set isAuth to false.
  const userIdNumber = Number(userId);
  const { currentUserId } = useUser(); // get the current userId from context, allows us to compare with url id parameter to manage security of datas
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkValidUrlID(setError, userIdNumber, currentUserId, setIsLoading);
  }, [userIdNumber, currentUserId]);

  return isLoading ? (
    <Loader />
  ) : error ? (
    <ErrorMessage />
  ) : (
    <>
      <h1 className='title1'>Profil</h1>
      <p className='subtitle'>Utilisateur {userId}</p>
      <button onClick={logout} className='btn'>
        Déconnexion
      </button>
    </>
  );
};

export default Profil;
