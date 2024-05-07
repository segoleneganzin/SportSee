import { Link, useLocation } from 'react-router-dom';
import { sports } from '../assets/datas/sports';

const VerticalNav = () => {
  const location = useLocation();
  const isAccueilCurrentPage = location.pathname.includes('accueil');

  return (
    <section className='vertical-section'>
      {/* store data in a table to enable better implementation in the API if required 
        (e.g., the user can select sports from a list and these will be displayed in the vertical bar)  */}
      {isAccueilCurrentPage && (
        <nav className='vertical-section__nav'>
          {sports.map((item, index) => (
            <Link
              href={item.link}
              className='vertical-section__nav-link'
              aria-label={item.name}
              key={index}
            >
              <img src={item.icon} alt='' />
            </Link>
          ))}
        </nav>
      )}
      <p className='vertical-section__copyright'>Copiryght, SportSee 2020</p>
    </section>
  );
};

export default VerticalNav;
