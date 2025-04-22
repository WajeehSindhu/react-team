import React from 'react';
import { Outlet } from 'react-router-dom';

const App = () => {
  return (
    <div>
      {/* This will render the component based on the route */}
      <Outlet />
    </div>
  );
};

export default App;
