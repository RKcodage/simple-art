import './App.css'
import { useState } from 'react';
import logo from './assets/ASwhite.png';

function App() {

  const [shinePosition, setShinePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    
    // Normalise la position de la souris pour l'appliquer sur l'effet shiny
    const xPos = (clientX / screenWidth) * 100;
    const yPos = (clientY / screenHeight) * 100;
    
    setShinePosition({ x: xPos, y: yPos });
  };
  return (
    <>
      <div className="w-full min-h-[100vh]" onMouseMove={handleMouseMove}>
        <div className="w-full min-h-[100vh] bg-[url('./assets/frequence.jpeg')] bg-cover bg-center bg-no-repeat relative overflow-hidden background-shiny" style={{
            '--shineX': `${shinePosition.x}%`,
            '--shineY': `${shinePosition.y}%`,
        }}>
          <div className="w-full p-6">
            <nav className="text-white flex justify-between">
              <p className="text-xl">Art by S. R</p>
              <ul className="flex gap-8 text-lg">
                <li className="cursor-pointer">Création</li>
                <li className="cursor-pointer">Artiste</li>
                <li className="cursor-pointer">Contact</li>
              </ul>
            </nav>
          </div>
          {/* <img src={logo} className="w-[150px] absolute left-1/2 top-[-25px] transform -translate-x-1/2"/>         */}
        </div>
      </div>
    </>
  )
}

export default App
