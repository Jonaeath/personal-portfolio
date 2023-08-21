import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import AboutMe from './Pages/AboutMe/AboutMe';

function App() {
  return (
    <BrowserRouter>
    
    <section id="home">
    <Home/>
    </section>
    <section>
      <AboutMe/>
    </section>
  
   
   
    
    </BrowserRouter>
  );
}

export default App;
