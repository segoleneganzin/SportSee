import { useParams } from 'react-router-dom';
import { useAuth } from '../utils/hooks/useAuth';

const Profil = () => {
  const { userId } = useParams(); // get id from url - result is string
  const { logout } = useAuth();

  return (
    <main>
      <p>Profil de l&apos;utilisateur {userId}</p>
      <button onClick={logout}>Déconnexion</button>
    </main>
  );
};

export default Profil;
