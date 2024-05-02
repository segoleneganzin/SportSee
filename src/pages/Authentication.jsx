import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../utils/hooks/useUser';

const Authentication = () => {
  // TODO design
  const navigate = useNavigate();
  const { userId, login, isAuth } = useUser();

  const connection = (userId) => {
    login(userId);
    navigate(`/accueil/${userId}`);
  };

  // if user is already authenticate, go to dashboard page
  useEffect(() => {
    if (isAuth) {
      navigate(`/accueil/${userId}`);
    }
  }, [isAuth, navigate, userId]);

  return (
    <main>
      <h1>Simulation d&apos;authentification</h1>
      <p>
        Pour le moment on sélectionne manuellement l&apos;utilisateur, on
        suppose qu&apos;ensuite on mettra en place l&apos;authentification et
        l&apos;id de l&apos;utilisateur sera automatiquement ajouter à
        l&apos;url lors de la redirection vers la page d&apos;accueil
      </p>
      <button onClick={() => connection(12)}>
        Connexion avec l&apos;utilisateur 12
      </button>
      <button onClick={() => connection(18)}>
        Connexion avec l&apos;utilisateur 18
      </button>
    </main>
  );
};

export default Authentication;
