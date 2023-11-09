import './index.scss'

import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import LogoTitle from '../assets/images/logo-r-black.png'
import Logo from './Logo'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'




const Home = () => {
    const [letterClass, setLetterClass] = useState("text-animate")

    const nameArray = ['e','a','b','e','t','s','w','e',' ','a']
    const jobArray = ['d','e','v','e','l','o','p','e','r', '.']

    useEffect(() => {
        const timer = setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 4000);
        return () => clearTimeout(timer);
      }, []);

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass}>H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={LogoTitle} alt="Javascript Developer Name, Web Developer"/>

                    <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>

                    <br />
                    
                     <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={15}/>
                </h1>
                <h2>Front End Developer / Javascript Expert / React Expert / Twicth Streamer</h2>
                <Link  to="/contact" className="flat-button">
                    CONTACT ME                    
                </Link>
                <Link  to="/portfolio" className="flat-button">
                    Projects                   
                </Link>
            </div>
           <Logo />
        </div>
        <Loader type="pacman" size="lg"/>
        </>
    )
}


export default Home