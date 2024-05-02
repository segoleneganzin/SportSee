import { useParams } from 'react-router-dom';
import { useUser } from '../utils/hooks/useUser';

const Profil = () => {
  const { userId } = useParams(); // get id from url - result is string
  const { logout } = useUser();

  return (
    <main>
      <p>Profil de l&apos;utilisateur {userId}</p>
      <button onClick={logout}>Déconnexion</button>
    </main>
  );
};

export default Profil;
