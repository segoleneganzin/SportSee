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
      <nav className={hamburgerOpen ? 'header-nav--responsive' : 'header-nav'}>
        <a href={`/accueil/${currentUserId}`} className='header-nav__link'>
          Accueil
        </a>
        <a href={`/profil/${currentUserId}`} className='header-nav__link'>
          Profil
        </a>
        <a href={`/reglages/${currentUserId}`} className='header-nav__link'>
          Réglages
        </a>
        <a href={`/communaute/${currentUserId}`} className='header-nav__link'>
          Communauté
        </a>
      </nav>
      {/* hamburger menu display on device under 1024px */}
      <a
        href='#'
        className='header-nav__burger-icon-link'
        onClick={openResponsiveMenu}
        aria-haspopup='true'
        aria-expanded={hamburgerOpen}
        aria-label='Ouverture du menu'
      >
        <span className='header-nav__burger-icon'>
          <span></span>
          <span></span>
          <span></span>
        </span>
      </a>
    </>
  );
};

export default HeaderNav;
