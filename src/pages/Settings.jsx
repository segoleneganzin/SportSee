import { useParams } from 'react-router-dom';

const Settings = () => {
  const { userId } = useParams(); // get id from url - result is string

  return (
    <div className='community page-content'>
      <h1 className='title1'>Réglages</h1>
      <p className='subtitle'>Utilisateur {userId}</p>
    </div>
  );
};

export default Settings;
