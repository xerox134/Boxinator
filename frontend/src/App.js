import './App.css';

import Nav from './Components/Nav/Nav';
import Home from './Components/Home/Home';
import Boxes from './Components/Boxes/Boxes';
import Form from './Components/Form/Form';
import {HashRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
     
<Router>

    <div className="App">
    <Nav></Nav>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Boxlist" element={<Boxes/>}/>
    <Route path="/Boxform" element={<Form/>}/>
    </Routes>

      
   <p>Nav</p>
   
    </div>
    </Router>
  );
}

export default App;
