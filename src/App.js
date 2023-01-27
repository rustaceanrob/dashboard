import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import BackgroundImg from './components/BackgroundImg';
import GridManager from './components/GridManager';

function App() {
  const [mode, setMode] = useState(false);
  
  useEffect(() => {
    const storedMode = localStorage.getItem('darkMode')
      if (storedMode) {
          setMode(JSON.parse(storedMode))
      } 
  }, [mode])

  function toggleMode() {
    setMode(!mode)
    const stored = mode ? "false" : "true"
    localStorage.setItem('darkMode', stored)
  } 

  return (
    <div>
      <BackgroundImg mode={mode}/>
      <GridManager dark={mode} toggleMode={toggleMode}/>
    </div>
  );
}

export default App;
