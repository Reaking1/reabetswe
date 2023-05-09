import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss'
import { useEffect, useState } from "react"
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase';

const Portfolio = () => {
   const [letterClass,setLetterClass] = useState('text-animate');
   const [Portfolio,setPortfolio] = useState([]);


   useEffect(() => {
    const timer = setTimeout(() => {
      return setLetterClass('text-animate-hover')
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    getPortfolio();
  } ,[]);

  const getPortfolio = async () => {
    const querySnapshot = await getDocs(collection(db, 'Portfolio'));
    setPortfolio(querySnapshot.docs.map((doc) => doc.data()));
  }

  const renderPortfolio = (Portfolio) => {
    return (
        <div className='images-container'>
            {
                Portfolio.map((port, idx) => {
                    return (
                        <div className='image-box' key={idx}>
                            <img src={port.image} className='Portfolio-image' alt='Portfolio'/>
                            <div className='content'>
                                <p className='title'>{port.name}</p>
                                <h4 className='title'>{port.description}</h4>
                                <button className='btn' onClick={() => window.open(port.url)}>View</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
  }


  return (
    <>
    <div className='container portolio-page'>
        <h1 className='page-title'>
            <AnimatedLetters letterClass={letterClass} strArray={"Portfolio".split("")}/>
        </h1>
        <div>{renderPortfolio(Portfolio)}</div>
    </div>
    <Loader type='pacman' />
    </>
  )
} 


export default Portfolio 