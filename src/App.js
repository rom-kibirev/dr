import './App.css';
import React from 'react';
import Pult from './components/Pult/Pult';

function App() {
  return (
      <React.Fragment>
        <Pult state="1" />
        <div className={"ml-16"}>section</div>
      </React.Fragment>
  );
}

export default App;
