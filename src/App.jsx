import './App.css';
import { useState, useEffect } from 'react';
import Artist from './components/Artist';
import Contact from './components/Contact';

function App() {
  const [hideNavbar, setHideNavbar] = useState(false);
  const [navbarVisible, setNavbarVisible] = useState(true);
  let visibilityTimeout;

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    const triggerHeight = 0.9 * window.innerHeight;

    // Navbar is hidden if scrolling level is higher than 90% of the window height
    if (scrollPosition > triggerHeight) {
      setHideNavbar(true);
      setNavbarVisible(false);
    } else {
      setHideNavbar(false);
      setNavbarVisible(true);
    }
  };

  const handleMouseMove = () => {
    if (hideNavbar) {
      setNavbarVisible(true);

      // Reset inactivity timer 
      clearTimeout(visibilityTimeout);
      visibilityTimeout = setTimeout(() => {
        setNavbarVisible(false);
      }, 1000);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(visibilityTimeout);
    };
  }, [hideNavbar]);

  return (
    <>
      <div className="w-full min-h-[100vh]" id="home">
        <div className="w-full min-h-[100vh] relative overflow-hidden">
          <div
            className={`w-full p-8 fixed top-0 left-0 z-50 transition-all duration-500 ${
              navbarVisible ? 'translate-y-0' : '-translate-y-full'
            } ${hideNavbar && navbarVisible ? 'bg-gradient-to-b from-black via-black/50 to-transparent' : 'bg-transparent'}`}
          >
            <nav className="text-white flex justify-between">
              <a href="#home">
                <p className="text-3xl font-semibold">Art by S. R</p>
              </a>

              <ul className="flex gap-10 text-xl">
                <li className="cursor-pointer hover:font-semibold hover:text-menuYellow hvr-underline-from-left">
                  Créations
                </li>
                <li className="cursor-pointer hover:font-semibold hover:text-menuYellow hvr-underline-from-left">
                  <a href="#artiste">Artiste</a>
                </li>
                <li className="cursor-pointer hover:font-semibold hover:text-menuYellow hvr-underline-from-left">
                  <a href="#contact">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Artist />
        <Contact />
      </div>
    </>
  );
}

export default App;
