import { useUser } from '../utils/hooks/useUser';

const Menu = () => {
  const { userId } = useUser();

  return (
    <nav className='menu'>
      <a href={`/accueil/${userId}`} className='menu__link'>
        Accueil
      </a>
      <a href={`/profil/${userId}`} className='menu__link'>
        Profil
      </a>
      <a href={`/reglages/${userId}`} className='menu__link'>
        Réglages
      </a>
      <a href={`/communaute/${userId}`} className='menu__link'>
        Communauté
      </a>
    </nav>
  );
};

export default Menu;
