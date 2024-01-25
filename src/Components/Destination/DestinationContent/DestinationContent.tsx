import './DestinationContent.css'

interface props {
    planetImg: string,
    isSelected: string,
    changePlanet: any,
    planetName: string,
    planetDescription: string,
    planetDistance: string,
    planetTravelTime: string
}

export default function DestinationContent(props: props) {

    return (
    <div className="DestinationContent">
      <img src={props.planetImg} alt="Planet" className='planetImg' />
      <div className="innerContent">
        <div className="chooseDest">
            <ul className='destList'>
                <li id={props.isSelected == 'moon' ? 'active-planet' : ''}
                onClick={props.changePlanet} >MOON</li>
                <li id={props.isSelected == 'mars' ? 'active-planet' : ''}
                onClick={props.changePlanet}>MARS</li>
                <li id={props.isSelected == 'europa' ? 'active-planet' : ''}
                onClick={props.changePlanet}>EUROPA</li>
                <li id={props.isSelected == 'titan' ? 'active-planet' : ''}
                onClick={props.changePlanet}>TITAN</li>
            </ul>
        </div>
        <h1 className='planetName'>{props.planetName}</h1>
        <p className='planetDescription'>{props.planetDescription}</p>
        <hr />
        <div className="planetInfo">
            <div className="distance">
                <h2 className='infoIndicate'>AVG. DISTANCE</h2>
                <h3 className='infoValue'>{`${props.planetDistance} KM`}</h3>
            </div>
            <div className="travelTime">
                <h2 className='infoIndicate'>EST. TRAVEL TIME</h2>
                <h3 className='infoValue'>{props.planetTravelTime}</h3>
            </div>
        </div>
      </div>
    </div>
  )
}
