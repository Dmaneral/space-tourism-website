import './Destination.css'
import DestinationContent from './DestinationContent/DestinationContent'
import moon from '../../assets/destination/image-moon.png'
import mars from '../../assets/destination/image-mars.webp'
import europa from '../../assets/destination/image-europa.png'
import titan from '../../assets/destination/image-titan.png'
import { useState } from 'react';


export default function Destination() {
  const [isSelected, setIsSelected] = useState('moon');
  const planetDescripionList = {moon: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
                            mars: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
                            europa: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
                            titan: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.'}


    function changePlanet(e: any) {
        if(e.target.innerHTML == 'MOON') {
            setIsSelected('moon');
        }else if(e.target.innerHTML == 'MARS') {
            setIsSelected('mars');
        }else if(e.target.innerHTML == 'EUROPA') {
            setIsSelected('europa');
        }else if(e.target.innerHTML == 'TITAN') {
            setIsSelected('titan');
        }
    }

  return (
    <div className="Destination">
      <h1 className='headText'><span>01</span> PICK YOUR DESTINATION</h1>
      <DestinationContent planetImg={isSelected == 'moon' ? moon : isSelected == 'mars' ? mars
          : isSelected == 'europa' ? europa : isSelected == 'titan' ? titan : ''} 
          isSelected={isSelected} changePlanet={changePlanet}
          planetName={isSelected} planetDescription={isSelected == 'moon' ? planetDescripionList.moon : isSelected == 'mars' ? planetDescripionList.mars
          : isSelected == 'europa' ? planetDescripionList.europa : isSelected == 'titan' ? planetDescripionList.titan : ''}
          planetDistance={isSelected == 'moon' ? '384.400' : isSelected == 'mars' ? '225 MIL.'
          : isSelected == 'europa' ? '628 MIL.' : isSelected == 'titan' ? '1.6 BIL.' : ''} 
          planetTravelTime={isSelected == 'moon' ? '3 DAYS' : isSelected == 'mars' ? '9 MONTHS'
          : isSelected == 'europa' ? '3 YEARS' : isSelected == 'titan' ? '7 YEARS' : ''}/>
    </div> 
  )
}
