import './NavBarMobile.css'
export default function NavBarMobile(props: {goNav: any}) {

  return (
    <div className={`NavBarMobile`}>
      <ul>
        <li onClick={props.goNav}><span>00</span>HOME</li>
        <li onClick={props.goNav}><span>01</span>DESTINATION</li>
        <li onClick={props.goNav}><span>02</span>CREW</li>
        <li onClick={props.goNav}><span>03</span>TECHNOLOGY</li>
      </ul>
    </div>
  )
}
