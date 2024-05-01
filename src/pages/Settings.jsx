import { useParams } from 'react-router-dom';

const Settings = () => {
  const { userId } = useParams(); // get id from url - result is string

  return (
    <main>
      <p>Réglages de l&apos;utilisateur {userId}</p>
    </main>
  );
};

export default Settings;
