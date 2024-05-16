import { useParams } from 'react-router-dom';

/**
 * Community page
 * @returns {JSX.Element}
 */
const Community = () => {
  const { userId } = useParams(); // get id from url - result is string

  return (
    <div className='community page-content'>
      <h1 className='title1'>Communauté</h1>
      <p className='subtitle'>Utilisateur {userId}</p>
    </div>
  );
};

export default Community;
