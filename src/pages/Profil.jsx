import { useParams } from 'react-router-dom';
import { useUser } from '../utils/hooks/useUser';

/**
 * Profil page
 * On this page, user can logout
 * @returns {JSX.Element}
 */
const Profil = () => {
  const { userId } = useParams(); // get id from url - result is string
  const { logout } = useUser(); // get the logout function of user context to set isAuth to false.

  return (
    <div className='community page-content'>
      <h1 className='title1'>Profil</h1>
      <p className='subtitle'>Utilisateur {userId}</p>
      <button onClick={logout} className='btn'>
        Déconnexion
      </button>
    </div>
  );
};

export default Profil;
