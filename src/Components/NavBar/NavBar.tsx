import { useWindowSize } from '@uidotdev/usehooks'
import './NavBar.css'

export default function NavBar(props: {goNav: any, activeClass: string}) {
  const windowSize = useWindowSize()
  return (
    <div className='NavBar'>
      <ul>
        <li onClick={props.goNav} className='navBarLi' id={props.activeClass == 'HOME' ? 'activePage' : ''}>{windowSize.width < 1025 ? "HOME" : (<div><span>00</span>HOME</div>)}</li>
        <li onClick={props.goNav} className='navBarLi' id={props.activeClass == 'DESTINATION' ? 'activePage' : ''}>{windowSize.width < 1025 ? "DESTINATION" : (<div><span>01</span>DESTINATION</div>)}</li>
        <li onClick={props.goNav} className='navBarLi' id={props.activeClass == 'CREW' ? 'activePage' : ''}>{windowSize.width < 1025 ? "CREW" : (<div><span>02</span>CREW</div>)}</li>
        <li onClick={props.goNav} className='navBarLi' id={props.activeClass == 'TECHNOLOGY' ? 'activePage' : ''}>{windowSize.width < 1025 ? "TECHNOLOGY" : (<div><span>03</span>TECHNOLOGY</div>)}</li>
      </ul>
    </div>
  )
}
