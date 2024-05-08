import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header.jsx';
import VerticalNav from '../layouts/VerticalNav.jsx';
import { useUser } from '../utils/hooks/useUser';
import { useNavigate } from 'react-router-dom';

const PageLayout = ({ children }) => {
  const navigate = useNavigate(); // manage redirection in case of unknown userId

  const { isAuth } = useUser();
  // if user isn't authenticate, go to authentication page
  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <>
      {isAuth && <Header />}
      <main>
        {isAuth && <VerticalNav />}
        {children}
      </main>
    </>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PageLayout;
