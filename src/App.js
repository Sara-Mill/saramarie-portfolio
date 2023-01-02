import React from 'react';
import { Header, Footer } from './components';
import './App.css';
import PortfolioContainer from './components/PortfolioContainer';

function App() {
  return (
    <div className="App">
      <Header />

      <PortfolioContainer />
      
      <Footer />
    </div>
  );
}

export default App
