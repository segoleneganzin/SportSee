import { useEffect } from 'react';
import PropTypes from 'prop-types';
import Header from '../layouts/Header.jsx';
import VerticalSection from '../layouts/VerticalSection.jsx';
import { useUser } from '../utils/hooks/useUser';
import { useNavigate } from 'react-router-dom';

/**
 * Application layout.
 * Use into main.jsx
 * if user is authenticate, he is seeing header + vertical nav
 * else, he is on authentication page and neither header or vertical nav are displayed
 * @param {object} props
 * @param {ReactNode} props.children - Child components to be wrapped
 * @returns {JSX.Element}
 */
const PageLayout = ({ children }) => {
  const navigate = useNavigate(); // manage redirection in case of unknown userId

  const { isAuth } = useUser();

  // if user isn't authenticate, go to authentication page
  // This secures data access
  useEffect(() => {
    if (!isAuth) {
      navigate('/');
    }
  }, [isAuth, navigate]);

  return (
    <>
      {isAuth && <Header />}
      <main>
        {isAuth && <VerticalSection />}
        {children}
      </main>
    </>
  );
};
PageLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
export default PageLayout;
