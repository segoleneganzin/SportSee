import { useParams } from 'react-router-dom';

const Community = () => {
  const { userId } = useParams(); // get id from url - result is string

  return (
    <main>
      <p>Communauté de l&apos;utilisateur {userId}</p>
    </main>
  );
};

export default Community;
