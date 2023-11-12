import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";
import Loader from 'react-loaders'
import './index.scss'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {  faGitAlt, faHtml5, faJsSquare, faNodeJs, faReact, faSass } from "@fortawesome/free-brands-svg-icons"


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
      
      return (
    <>
      <div className="container about-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['A','b','o','u','t','','m','e']} idx={15}/>
            </h1>
            <div className="info about">
            <p>
            I am a front-end developer seeking to work with a well-known IT company that offers the opportunity to work with the latest and most up-to-date technology trends. I am eager to take on big and challenging projects and contribute my skills to the company's success.
            </p>
                <p align="LEFT">
                I am highly confident, exceptionally curious, and possess a competitive spirit. I believe in creating smarter ways to write code efficiently and constantly strive for improvement. As a result, I am an interesting individual to work with
                </p>
                <p>
                To get a full description of myself, I would describe myself as a part-time streamer/pro gamer, an older brother admired by his sisters, an animal lover (I really like goats), a martial arts fan, a music addict, and someone who is quite literally obsessed with tech!
                </p>
                </div>
        </div>


  <div className="stage-cube-cont">
    <div className="cubespinner">

      <div className="face1">
        <FontAwesomeIcon icon={faHtml5}  color="#00000"/>
      </div>

      <div className="face2">
        <FontAwesomeIcon icon={faGitAlt}  color="#00000"/>
      </div>

      <div className="face3">
        <FontAwesomeIcon icon={faReact}  color="#00000"/>
      </div>

      <div className="face4">
        <FontAwesomeIcon icon={faJsSquare}  color="#00000"/>
      </div>

      <div className="face5">
        <FontAwesomeIcon icon={faSass}  color="#00000"/>
      </div>

      <div className="face6">
        <FontAwesomeIcon icon={faNodeJs}  color="#00000"/>
      </div>

    </div>
     </div>
  </div>
      <Loader  type="pacman" size="lg" />
      </>
      )
}


export default About