import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ErrorPage from './pages/ErrorPage';
import Authentication from './pages/Authentication';
import Profil from './pages/Profil';
import Settings from './pages/Settings';
import Community from './pages/Community';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Authentication />} />
      <Route path='/accueil/:userId' element={<Dashboard />} />
      <Route path='/profil/:userId' element={<Profil />} />
      <Route path='/reglages/:userId' element={<Settings />} />
      <Route path='/communaute/:userId' element={<Community />} />

      {/* NotFound - error 'caught' by code - can be managed by navigate */}
      <Route
        path='/erreur404'
        element={
          <ErrorPage
            errorType={'404'}
            errorMessage={`Oups! La page que vous demandez n'existe pas.`}
          />
        }
      />
      {/* all routes undefined above */}
      <Route
        path='*'
        element={
          <ErrorPage
            errorType={'404'}
            errorMessage={`Oups! La page que vous demandez n'existe pas.`}
          />
        }
      />
    </Routes>
  );
};

export default Router;
