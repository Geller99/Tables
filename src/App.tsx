import React from 'react';
import Router from './components/Router';

/*  
  Renders router for multi-page display
  Routes are defined in Router component
*/


const App:React.FC = () => {
  return (
    <div className="App">
      <Router/>
    </div>
  );
}

export default App;
