import './Crew.css'
import anousheh from '../../assets/crew/image-anousheh-ansari.png'
import douglas from '../../assets/crew/image-douglas-hurley.png'
import mark from '../../assets/crew/image-mark-shuttleworth.png'
import victor from '../../assets/crew/image-victor-glover.png'
import { useState } from 'react'

export default function Crew() {
  const [isSelected, setIsSelected] = useState(1)
  const names = ['Douglas Hurley', ' MARK SHUTTLEWORTH',
    'Victor Glover', 'Anousheh Ansari'];
  const roles = ['Commander', 'Mission Specialist',
    'PILOT', 'Spaceflight Particip']
  const about = ['Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
    'Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.',
    'Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.',
    'Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.']

  function changePerson(id: number) {
    if (id == 1) {
      setIsSelected(1);
    } else if (id == 2) {
      setIsSelected(2);
    } else if (id == 3) {
      setIsSelected(3);
    } else if (id == 4) {
      setIsSelected(4);
    }

    console.log(isSelected)
  }

  return (
    <div className="Crew">
      <h1 className='headText'><span>02</span> MEET YOUR CREW</h1>
      <div className="contentCrew">
        <img src={isSelected == 1 ? douglas
          : isSelected == 2 ? mark
            : isSelected == 3 ? victor
              : isSelected == 4 ? anousheh : ''} alt="crew" className='crewImg' />
        <div className="contentWrapper">
          <div className="sectionSelect">
            <div className="circle" onClick={() => changePerson(1)}
              id={isSelected == 1 ? 'selected' : ''}></div>
            <div className="circle" onClick={() => changePerson(2)}
              id={isSelected == 2 ? 'selected' : ''}></div>
            <div className="circle" onClick={() => changePerson(3)}
              id={isSelected == 3 ? 'selected' : ''}></div>
            <div className="circle" onClick={() => changePerson(4)}
              id={isSelected == 4 ? 'selected' : ''}></div>
          </div>
          <div className="info">
            <h1 className='role'>{roles[isSelected - 1]}</h1>
            <h2 className='name'>{names[isSelected - 1]}</h2>
            <p className='about'>{about[isSelected - 1]}</p>
          </div>
        </div>

      </div>
    </div>
  )
}
