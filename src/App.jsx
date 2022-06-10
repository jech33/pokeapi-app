import React from 'react';
import { Routes, Route } from 'react-router-dom';
import appRoutes from './routes';
import './styles/App.css';

const App = () => {
  return (
    <Routes>
      {appRoutes.map((route) => (
        <Route
          key={route.name}
          path={route.path}
          element={route.component}
        />
      ))}
    </Routes>
  );
}

export default App;
