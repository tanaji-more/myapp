import React from 'react';
import './App.css'; // assuming you have a CSS file for global styles
import BusinessComponent from './components/BusinessComponent';
import ImageTemplatesComponent from './components/ImageTemplatesComponent';

function App() {
  return (
    <div className="App">
      <BusinessComponent />
      <ImageTemplatesComponent />
    </div>
  );
}

export default App;
