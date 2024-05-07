import { useState } from 'react';
import { useUser } from '../utils/hooks/useUser';

const Menu = () => {
  const { userId } = useUser();
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const openResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
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
      <a
        href='#'
        className='icon'
        onClick={openResponsiveMenu}
        aria-haspopup='true'
        aria-controls='toggleNavbar'
        aria-expanded={hamburgerOpen}
        aria-label='Ouverture du menu'
      >
        <span className='burger-icon'>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </>
  );
};

export default Menu;
