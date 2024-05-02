import PropTypes from 'prop-types';
import Header from '../layouts/Header.jsx';
import VerticalNav from '../layouts/VerticalNav.jsx';
import { useUser } from '../utils/hooks/useUser';

const PageLayout = ({ children }) => {
  const { isAuth } = useUser();

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
