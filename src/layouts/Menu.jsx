import { useState, useEffect } from 'react';
import { useUser } from '../utils/hooks/useUser';

const Menu = () => {
  const [userIdContext, setUserIdContext] = useState(null);
  const { userId } = useUser();
  useEffect(() => {
    setUserIdContext(userId);
  }, [userId]);
  return (
    userIdContext && (
      <nav className='menu'>
        <a href={`/accueil/${userIdContext}`} className='menu__link'>
          Accueil
        </a>
        <a href={`/profil/${userIdContext}`} className='menu__link'>
          Profil
        </a>
        <a href={`/reglages/${userIdContext}`} className='menu__link'>
          Réglages
        </a>
        <a href={`/communaute/${userIdContext}`} className='menu__link'>
          Communauté
        </a>
      </nav>
    )
  );
};

export default Menu;
