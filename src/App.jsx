
import './App.css';
import Home from './home'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import About from './about';

function App() {
  return (
     <>
      <BrowserRouter basename="/react-portfolio">
      
      <Routes>
          <Route path='/' element={<Home/>}/>
         
      </Routes>

  </BrowserRouter> 
 
     </>
  )
}

export default App;
