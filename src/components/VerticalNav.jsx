import { Link } from 'react-router-dom';
import { sports } from '../assets/datas/sports';

/**
 * Component Component of the vertical menu, located in the vertical section.
 * Depending on the page, may or may not be displayed.
 * Currently displayed into dashboard page (accueil)
 * Store data in a table to enable better implementation in the API if required
 * (e.g., the user can select sports from a list and these will be displayed in the vertical bar
 * and data related to the selected sport would complete the charts)
 * @returns {JSX.Element}
 */
const VerticalNav = () => {
  return (
    <nav className='vertical-nav'>
      {sports.map((item, index) => (
        <Link
          href={item.link}
          className='vertical-nav__link'
          aria-label={item.name}
          key={index}
        >
          <img src={item.icon} alt='' />
        </Link>
      ))}
    </nav>
  );
};

export default VerticalNav;
