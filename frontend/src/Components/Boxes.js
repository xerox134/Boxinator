import axios from 'axios';
import React, {useEffect, useState} from 'react'
import '../App.css'

export default function Boxes() {

    const [boxes, setBoxes] = useState([]);
    const [weight, setWeight] = useState();
    const [sum, setSum] = useState();



  const getBoxes = async () => {
    try {
    let response = await axios.get("http://localhost:8080/rest/boxes");
      setBoxes(response.data);

      const totalWeight = boxes.reduce((accumulator, object) => {
        return accumulator + object.weight;
      }, 0); 
      
      const totalSum = boxes.reduce((accumulator, object) => {
        return accumulator + object.shipping_cost;
      }, 0);
      setWeight(totalWeight)
      setSum(totalSum)

    } catch (error) {
      console.log("Error:", error)
    }
}


  useEffect(() => {
    getBoxes()
  }, []);

  return (
    <div>

   

    <h1>BoxList</h1>

    <table className='sub-container'>
      <tbody>
      <tr>
      <th>Reciver</th>
      <th>Weight</th>
      <th>Color</th>
      <th>Country</th>
      <th>ShippingCost</th>
      </tr>
      {boxes.map(box => (  
              <tr key={box.id}>

       <td>{box.name} </td>
       <td>{box.weight} </td>
       <td style={{"backgroundColor":"rgb("+box.box_color+")"}}></td>
       <td>{box.country} </td>
       <td>{box.shipping_cost} </td>
        
            
          
          </tr>
        ))} 
        </tbody>
    </table>

        total Weight:{weight} total Sum:{sum}

    {/* ///////////////////////////////////////////////////////////////////////////////////// */}
    <div className='container'>
    <div className='sub-container'>
    <div><h3>Name</h3></div>
    <div><h3>Country</h3></div>
    <div><h3>Weight</h3></div>
    </div>
    <div className='sub-container'>
    {boxes.map(box => (  
          <li  key={box.id}>  
          <h6>Name</h6>
            <p>{box.name}  </p>
            <h6>country</h6>

            <p>{box.country}  </p>
            <h6>box_color</h6>
            <div></div>
            <p>{box.box_color}  </p>
            <h6>weight</h6>

            <p>{box.weight}  </p>
            <h6>shipping_cost</h6>

            <p>{box.shipping_cost}  </p>
            
          </li>  
        ))} 
    </div>
    </div>
        </div>
  )
}





