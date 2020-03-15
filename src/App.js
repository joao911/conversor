import React from 'react';
import 'bootstrap-css-only'

import Header from './componentes/header'
import Conversor from './componentes/conversor'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Conversor/>
    </div>
  );
}

export default App;
