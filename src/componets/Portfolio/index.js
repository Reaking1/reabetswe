import './Portfolio.scss'
//images
import blog3 from '../assets/images/blog3.png'
import Twopic from '../assets/images/portone.png'
//packeges
import AnimatedLetters from "../AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from 'react-loaders'

const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        const timer = setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);
    return (
        <>
        <div className='title'>
        <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['T','h','e',' ','p','r','o','j','e','c','t','s',' ','t','h','a','t',' ','I',' ','h','a','v','e',' ','w','o','r','k','e','d',' ','w','i','t','h','.']} idx={15}/>
            </h1>
        </div>
            <div className='project'>
                <img src={Twopic} alt='any' className='project-image'/>
                <div className='project-details'>
                    <h3>My personal Portfolio</h3>
                    <p>This is a portfolio designed to promote my streaming channel to potential brands. The portfolio has been built using various frameworks, which initially posed challenges. However, solutions were found by creating less complicated animations and focusing on simple yet functional designs.</p>
                </div>
            </div>

            <div className='project'>
              <a href='https://blog-puce-eight.vercel.app/blog'>
                <img src={blog3} alt='any' className='project-image'/>
                <div className='project-details'>
                    <h3>My own personal blog</h3>
                    <p>In this project, I have created a blog to describe the journey of a developer and streamer. My aim was to provide a more comprehensive perspective on what it's like to start a career in tech and the requirements for becoming a successful streamer. However, I encountered challenges with promoting the blog.</p> 
                </div>
                </a>
            </div>

            
            <Loader  type="pacman" size="lg" />
        </>
    )
}

export default Portfolio