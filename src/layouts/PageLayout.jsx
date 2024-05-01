import PropTypes from 'prop-types';
import Header from '../layouts/Header.jsx';
import VerticalNav from '../layouts/VerticalNav.jsx';
import { useAuth } from '../utils/hooks/useAuth';

const PageLayout = ({ children }) => {
  const { isAuth } = useAuth();
  return (
    <div>
      {isAuth && <Header />}
      {isAuth && <VerticalNav />}
      {children}
    </div>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PageLayout;
