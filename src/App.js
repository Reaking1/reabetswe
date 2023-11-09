import './App.scss';
import Layouts from './componets/Layouts';
import Home from './componets/Home';
import Contact from './componets/Contact';
import About from './componets/About';
import {
  createBrowserRouter, 
   Route,
    createRoutesFromElements,
    RouterProvider} from 'react-router-dom'
import Portfolio from './componets/Portfolio';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element= {<Layouts />}>
       <Route index element= {<Home />}/>
       <Route path='/portfolio' element={<Portfolio />} />
       <Route path='/contact' element= {<Contact />} />
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
