import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.jsx';
import { UserProvider } from './context/UserContext';
import { AuthProvider } from './context/AuthContext.jsx';

import './stylesheet/main.scss';
import PageLayout from './layouts/PageLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <AuthProvider>
      <UserProvider>
        <PageLayout>
          <Router />
        </PageLayout>
      </UserProvider>
    </AuthProvider>
  </BrowserRouter>
);
