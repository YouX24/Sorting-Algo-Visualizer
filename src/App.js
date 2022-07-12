import React from 'react';
import Header from './components/Header'
import Graph from './components/Graph';

const App = () => {
  return (
    <div className="graph-container">
      <Header/>
      <Graph/>
    </div>
  )
}

export default App;