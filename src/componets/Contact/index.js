import { useEffect, useState } from "react"
import { useRef } from "react"
import emailjs from '@emailjs/browser'
import AnimatedLetters from "../AnimatedLetters"
import Loader from "react-loaders"
import './index.scss'
import {MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'

const Contact = () => {
    const [letterClass, setLetterClass] = useState("text-animate")
    const refForm = useRef()


    useEffect(() => {
        const timer = setTimeout(() => {
          return setLetterClass('text-animate-hover')
        }, 3000);
        return () => clearTimeout(timer);
      }, []);


    const sendEmail = (e) => {
        e.preventDefault()

        emailjs.sendForm('reabetswe', 'Mike', refForm.current, '82OLPn0vq_W31h5t7')
        .then(() => {
            alert('Message was successfully sent!')
            window.location.reload(false)
        },
        () => {
            alert('Message was unsuccessfully sent, try again')
        });
       
    }

    return (
       <>
       <div className="container contact-page">
        <div className="text-zone">
            <h1>
                <AnimatedLetters letterClass={letterClass} strArray={['C','o','n','t','a','c','t',' ','m','e']}/>
            </h1>
            <h3>I am interested in tackling problems, getting extra work done and freelance opportunities-this mainly apply to bold or large projects. However, if you have other questions or requests, please do not hesitate to contact me using the form below. </h3>
            
            <div className="contact-form">
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
                            <input placeholder="Name" type="text" name="name" required />

                        </li>
                        <li className="half">
                            <input placeholder="Email" type="email" name="email" required/>
                            
                        </li>
                        <li>
                        <input placeholder="Subject" type="text" name="text" required/>
                            
                        </li>
                        <li>
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                        <input type="submit" className="flat-button" value="SEND"/>
                            
                        </li>
                    </ul>
                </form>
            </div>
        
        </div>
        
        <div className="info-map">
            Reabetswe Madileng
            <br />
            Alexandra
            <br />
            9th Ave Flat C No 13 <br />
            Johannesburg 2090 <br />
            <br />
            <span>reabetsweramoswane@gmail.com</span>
        </div>
        <div className="map-wrap"> 
            <MapContainer center={[-26.107156644888626, 28.096271315484294]} zoom={13}>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                <Marker position={[-26.107156644888626, 28.096271315484294]}>
                    <Popup>Mr Madileng lives here, lets share a drink ^^</Popup>
                </Marker>
            </MapContainer>
        </div>
 

       </div>
       <Loader type="pacman" />
       </>
    )
}

export default Contact