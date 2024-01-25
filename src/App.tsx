import { useState } from 'react'
import { useWindowSize } from "@uidotdev/usehooks";
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import NavBarMobile from './Components/NavBar/NavBarMobile'
import Home from "./Components/Home/Home"
import Destination from './Components/Destination/Destination'
import Crew from './Components/Crew/Crew'
import Technology from './Components/Technology/Technology'
import logo from './assets/shared/logo.svg'
import hamburger from './assets/shared/icon-hamburger.svg'
import close from './assets/shared/icon-close.svg'


function App() {

  const windowSize = useWindowSize()
  const [navIsOpened, setNavIsOpened] = useState(false);
  const [page, setPage] = useState('HOME');

  function toggleMenu() {
    setNavIsOpened(!navIsOpened);
  }

  function goExplore() {
    setPage("DESTINATION");
  }

  function goNav(e: any) {
    if(e.target.innerHTML.includes('HOME')) {
      setPage('HOME');
      setNavIsOpened(false);
    }else if(e.target.innerHTML.includes('DESTINATION')) {
      setPage('DESTINATION');
      setNavIsOpened(false);
    }else if(e.target.innerHTML.includes('CREW')) {
      setPage('CREW');
      setNavIsOpened(false);
    }else if(e.target.innerHTML.includes('TECHNOLOGY')) {
      setPage('TECHNOLOGY');
      setNavIsOpened(false);
    }
  }

  return (
    <div className='App'>
      
      <header>
        <img src={logo} alt="Logo" />
        {
        windowSize.width < 767 ? 
          (
            <img src={navIsOpened ? close : hamburger} alt="menu"
          onClick={toggleMenu} className='menu-button' />
          ) : (<NavBar goNav={goNav} activeClass={page}/>)
        }
      </header>
      
      {navIsOpened ? (<NavBarMobile goNav={goNav}/>) : null}
      {
        page == 'HOME' ? (<Home goExplore={goExplore}/>) 
        : page == 'DESTINATION' ? (<Destination />)
        : page == 'CREW' ? (<Crew />)
        : page == 'TECHNOLOGY' ? (<Technology />)
        : <Home goExplore={goExplore} />
      }
    </div>
  )
}

export default App
