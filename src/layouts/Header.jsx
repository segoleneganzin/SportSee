import HeaderNav from '../components/HeaderNav';
import logo from '../assets/images/logo.png';

/**
 * Layout of the header.
 * Contains the Menu component
 * @returns {JSX.Element}
 */
const Header = () => {
  return (
    <header className='header'>
      <img
        src={logo}
        alt='logo'
        className='header__logo'
        width={178}
        height={61}
      />
      <HeaderNav />
    </header>
  );
};

export default Header;
