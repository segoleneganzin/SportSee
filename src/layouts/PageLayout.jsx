import PropTypes from 'prop-types';
import Header from '../layouts/Header.jsx';
import VerticalNav from '../layouts/VerticalNav.jsx';
import { useUser } from '../utils/hooks/useUser';

const PageLayout = ({ children }) => {
  const { isAuth } = useUser();

  return (
    <>
      {isAuth && <Header />}
      {isAuth && <VerticalNav />}
      {children}
    </>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PageLayout;
