import './App.css';
import Profile from './Components/Profile';
import Login from './Components/Login';
import ChangeColor from './Components/ChangeColor';
import Nav from './Components/Nav';
import Home from './Components/Home';
import Store from './Components/Store';
import ItemDetail from './Components/ItemDetail';
import {HashRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
     
<Router>

    <div className="App">

    <Nav></Nav>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/Profile" element={<Profile/>}/>
    <Route path="/Login" element={<Login/>}/>
    <Route path="/Color" element={<ChangeColor/>}/>
    <Route path="/Store" element={<Store/>}/>
    <Route path="/Store/:id" element={<ItemDetail/>}/>
    </Routes>

      
   
   
    </div>
    </Router>
  );
}

export default App;
