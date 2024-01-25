import './Technology.css'
import vehicle_landscape from '../../assets/technology/image-launch-vehicle-landscape.jpg'
import vehicle_portrait from '../../assets/technology/image-launch-vehicle-portrait.jpg'
import capsule_landscape from '../../assets/technology/image-space-capsule-landscape.jpg'
import capsule_portrait from '../../assets/technology/image-space-capsule-portrait.jpg'
import spaceport_landscape from '../../assets/technology/image-spaceport-landscape.jpg'
import spaceport_portrait from '../../assets/technology/image-spaceport-portrait.jpg'
import { useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'


export default function Technology() {
  const windowSize = useWindowSize();
  const [isSelected, setIsSelected] = useState(1);
  const vehicleImgs_portrait = [vehicle_portrait, spaceport_portrait, capsule_portrait];
  const vehicleImgs_landscape = [vehicle_landscape, spaceport_landscape, capsule_landscape]
  const vehicleNames = ['LAUNCH VEHICLE', 'SPACEPORT', 'SPACE CAPSULE']
  const vehicleInfo = ["A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."]

  function chooseSection(e: any) {
    if (e.target.innerHTML == '1') {
      setIsSelected(1);
    } else if (e.target.innerHTML == '2') {
      setIsSelected(2);
    } else if (e.target.innerHTML == '3') {
      setIsSelected(3);
    }
  }

  return (
    <div className='Technology'>
      <h1 className='headText'><span>03</span> SPACE LAUNCH 101</h1>
      <div className="container">
        <img src={windowSize.width < 1025 ? (vehicleImgs_landscape[isSelected - 1]) : (vehicleImgs_portrait[isSelected - 1])} alt="img" className='vehicleImg' />
        <div className="contentWrapper">
          <div className="selectBtns">
            <button id={isSelected == 1 ? 'active' : ''} className='selectBtn' onClick={chooseSection}>1</button>
            <button id={isSelected == 2 ? 'active' : ''} className='selectBtn' onClick={chooseSection}>2</button>
            <button id={isSelected == 3 ? 'active' : ''} className='selectBtn' onClick={chooseSection}>3</button>
          </div>
          <div className="info">
            <h2 className="terminology">THE TERMINOLOGY...</h2>
            <h1 className="vehicleName">{vehicleNames[isSelected - 1]}</h1>
            <p className="about">{vehicleInfo[isSelected - 1]}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
