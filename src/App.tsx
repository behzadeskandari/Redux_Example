import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom';
function App() : JSX.Element{
  return (
    <div >
      <p>Test</p>
      <header >
            <p>test</p>        
      </header>
    </div>
  );
}

const root = document.getElementById('app-root')

ReactDOM.render(<App />, root)

export default App;
