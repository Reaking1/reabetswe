import './App.scss';
import Layouts from './componets/Layouts';
import Home from './componets/Home';
import Contact from './componets/Contact';
import Portfolio from './componets/Portfolio'
import About from './componets/About';
import {
  createBrowserRouter, 
   Route,
    createRoutesFromElements,
    RouterProvider} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layouts />}>
       <Route index element= {<Home />}/>
       <Route path='/contact' element= {<Contact />} />
       <Route path='/porfolio' element={<Portfolio />} />
       <Route path='/about' element={<About />} />
        </Route>
  )
)

function App() {
  return (
  
    
   <RouterProvider  router={router}/>
  );

  }

export default App;
