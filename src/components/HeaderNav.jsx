import { useState } from 'react';
import { useUser } from '../utils/hooks/useUser';

/**
 * Component of the menu, located in the header.
 * @returns {JSX.Element}
 */
const HeaderNav = () => {
  const { currentUserId } = useUser();

  // manage responsive menu for device under 1024px
  const [hamburgerOpen, setHamburgerOpen] = useState(false);
  const openResponsiveMenu = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <>
      {/* nav links content */}
      <nav className={hamburgerOpen ? 'menu--responsive' : 'menu'}>
        <a href={`/accueil/${currentUserId}`} className='menu__link'>
          Accueil
        </a>
        <a href={`/profil/${currentUserId}`} className='menu__link'>
          Profil
        </a>
        <a href={`/reglages/${currentUserId}`} className='menu__link'>
          Réglages
        </a>
        <a href={`/communaute/${currentUserId}`} className='menu__link'>
          Communauté
        </a>
      </nav>
      {/* hamburger menu display on device under 1024px */}
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

export default HeaderNav;
