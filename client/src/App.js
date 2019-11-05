import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './Router';
// global

const App = () => {
  return (
    <Router>
      <AppRouter></AppRouter>
    </Router>
  );
};

export default App;
