import { useState } from 'react';
import { useUser } from '../utils/hooks/useUser';
import { Link } from 'react-router-dom';

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
        <Link to={`/accueil/${currentUserId}`} className='header-nav__link'>
          Accueil
        </Link>
        <Link to={`/profil/${currentUserId}`} className='header-nav__link'>
          Profil
        </Link>
        <Link to={`/reglages/${currentUserId}`} className='header-nav__link'>
          Réglages
        </Link>
        <Link to={`/communaute/${currentUserId}`} className='header-nav__link'>
          Communauté
        </Link>
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
