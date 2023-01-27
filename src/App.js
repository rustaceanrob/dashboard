import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BackgroundImg from './components/BackgroundImg';
import GridManager from './components/GridManager';

function App() {
  const [mode, setMode] = useState();
  
  useEffect(() => {
    window.matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', event => {
        const colorScheme = event.matches ? "dark" : "light";
        setMode(colorScheme);
      })
  }, [mode])

  return (
    <div>
      <BackgroundImg mode={mode}/>
      <GridManager/>
    </div>
  );
}

export default App;
