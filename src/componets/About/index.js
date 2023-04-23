import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters";


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
                <p>
                    This section would need you to work on the main section of the devloperes community. Obivilousyl you have to work with the lastest trend with main work with a background
                    of  a cool desing. with this we ould be done desining the page 
                </p>
            </h1>
        </div>
      </div>
      </>
      )
}


export default About