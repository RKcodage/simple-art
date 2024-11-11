import './App.css'
import { useState } from 'react';
import Artist from './components/Artist';
// import logo from './assets/ASwhite.png';

function App() {

  return (
    <>
      <div className="w-full min-h-[100vh]" id='home'>
        <div className="w-full min-h-[100vh] relative overflow-hidden">
          <div className="w-full p-8 fixed top-0 left-0 z-50 bg-black/70">
            <nav className="text-white flex justify-between">

              <a href="#home"><p className="text-2xl font-semibold">Art by S. R</p></a>

              <ul className="flex gap-10 text-xl">
                <li className="cursor-pointer hover:font-semibold hover:text-menuYellow hvr-underline-from-left">Créations</li>
                <li className="cursor-pointer hover:font-semibold  hover:text-menuYellow hvr-underline-from-left">
                  <a href="#artiste">Artiste</a>
                </li>
                <li className="cursor-pointer hover:font-semibold  hover:text-menuYellow hvr-underline-from-left">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          {/* <img src={logo} className="w-[150px] absolute left-1/2 top-[-25px] transform -translate-x-1/2"/>         */}
        </div>
        <Artist/>
      </div>
    </>
  )
}

export default App
