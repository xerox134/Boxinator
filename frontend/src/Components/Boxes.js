import React, {useEffect, useState} from 'react'
import '../App.css'

export default function Boxes() {

    const [boxes, setBoxes] = useState([]);



  const getBoxes = async () => {

    let response = await fetch("http://localhost:8080/rest/boxes");
      response = await response.json();
      setBoxes(response);
   
      //   response.forEach((element) => {
      
    //     setBoxes(element);
    //     })

}

  useEffect(() => {
    // fetchMyThreads();
    getBoxes()
  }, []);

  return (
    <div>

 

    <h1>BoxList</h1>
    
    <div className='container'>
    <div className='sub-container'>
    <div><h3>Name</h3></div>
    <div><h3>Country</h3></div>
    <div><h3>Weight</h3></div>
    </div>
    <div className='sub-container'>
    {boxes.map(box => (  
          <li >  
            {box.name}  
            {box.country}  
            {box.weight}  
          </li>  
        ))} 
    </div>
    </div>
        </div>
  )
}





