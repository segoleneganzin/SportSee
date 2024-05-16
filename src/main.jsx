import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Router from './Router.jsx';
import { UserProvider } from './context/UserContext';

import './stylesheet/main.scss';
import PageLayout from './layouts/PageLayout.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <UserProvider>
      <PageLayout>
        <Router />
      </PageLayout>
    </UserProvider>
  </BrowserRouter>
);
