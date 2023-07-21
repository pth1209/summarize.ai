import React from 'react';
import "./App.css"
import Header from './components/Header';
import Summarizer from './components/Summarizer';



function App() {
  return (
    <main>
      <div className = "main">
        <div className = "gradient"></div>
      </div>

      <div className = "app">
        <Header />
        <Summarizer />
      </div>
    </main>
  );
}

export default App;
