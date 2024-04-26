import Menu from './Menu';
import logo from '../assets/logo.png';

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
      <Menu />
    </header>
  );
};

export default Header;
