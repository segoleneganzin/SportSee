import React from 'react';
import ReactDOM from 'react-dom/client';
// import TestMock from './pages/TestMock.jsx';
import Header from './layouts/Header.jsx';
import VerticalNav from './layouts/VerticalNav.jsx';
import Dashboard from './pages/Dashboard.jsx';
import './stylesheet/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <VerticalNav />
    {/* <TestMock /> */}
    <Dashboard />
  </React.StrictMode>
);
