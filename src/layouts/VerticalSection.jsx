import { useLocation } from 'react-router-dom';
import VerticalNav from '../components/VerticalNav';

/**
 * Layout representing the vertical nav, use into Page Layout.
 * Depending on the page, the icon menu may or may not be displayed.
 * @returns {JSX.Element}
 */
const VerticalSection = () => {
  const location = useLocation(); // Set whether or not to display icons, depending on the current page.
  const isAccueilCurrentPage = location.pathname.includes('accueil'); // if user is on dashboard page, so he can see icons of vertical nav

  return (
    <section className='vertical-section'>
      {/* vertical nav is currently displayed only on dashboard page (accueil) */}
      {isAccueilCurrentPage && <VerticalNav />}
      {/* copyright is always display, no matter the page */}
      <p className='vertical-section__copyright'>Copyright, SportSee 2020</p>
    </section>
  );
};

export default VerticalSection;
