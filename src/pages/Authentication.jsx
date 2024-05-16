import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../utils/hooks/useUser';
import logo from '../assets/images/logo.png';

/**
 * Authentication page
 * For the moment it's an authentication simulation
 * @returns {JSX.Element}
 */
const Authentication = () => {
  const navigate = useNavigate(); // when isAuth is true, navigate to dashboard
  const { currentUserId, login, isAuth } = useUser(); // get elements from user context

  const connection = (userId) => {
    login(userId); // Set isAuth to true
    navigate(`/accueil/${userId}`); // navigate to user dashboard
  };

  // if user is already authenticate, go to dashboard page
  useEffect(() => {
    if (isAuth) {
      navigate(`/accueil/${currentUserId}`);
    }
  }, [isAuth, navigate, currentUserId]);

  return (
    <div className='authentication page-content'>
      <img
        src={logo}
        alt='logo'
        className='header__logo'
        width={178}
        height={61}
      />
      <h1 className='title1'>Simulation d&apos;authentification</h1>
      <p className='subtitle'>
        Pour le moment on sélectionne manuellement l&apos;utilisateur, on
        suppose qu&apos;ensuite on mettra en place l&apos;authentification et
        l&apos;id de l&apos;utilisateur sera automatiquement ajouter à
        l&apos;url lors de la redirection vers la page d&apos;accueil
      </p>
      <button onClick={() => connection(12)} className='btn'>
        Connexion avec l&apos;utilisateur 12
      </button>
      <button onClick={() => connection(18)} className='btn'>
        Connexion avec l&apos;utilisateur 18
      </button>
    </div>
  );
};

export default Authentication;
