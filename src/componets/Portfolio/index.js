import './Portfolio.scss'
//images
import blog3 from '../assets/images/blog3.png'
import Twopic from '../assets/images/portone.png'


const Portfolio = () => {
    return (
        <>
        <div className='title'>
            <h1>Projects that I have worked with and done</h1>
        </div>
            <div className='project'>
                <img src={Twopic} alt='any' className='project-image'/>
                <div className='project-details'>
                    <h3>Workout app</h3>
                    <p>the project will be placed soon...Note this will be better soon as we make the layout active</p>
                </div>
            </div>

            <div className='project'>
              <a href='https://blog-puce-eight.vercel.app/blog'>
                <img src={blog3} alt='any' className='project-image'/>
               
                <div className='project-details'>
                    <h3>My own personal blog</h3>
                    <p>the project will be placed soon...Note this will be better soon as we make the layout active</p>
                    
                </div>
                </a>
            </div>
          
          
           
        </>
    )
}

export default Portfolio