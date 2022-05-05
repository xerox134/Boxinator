import React, {useEffect, useState} from 'react'
import '../App.css'

export default function Item({match}) {

//   useEffect(()=>{
//     fetchItem();
//     console.log(match)
//   },[]);

//   const [item, setItem] = useState({});

//   const fetchItem = async () => {

// const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?ids=${match.params.id}`);

//     const items = await data.json();
//     console.log(items.data);
//  }

const [boxes, setBoxes] = useState([]);

  // async function fetchMyThreads() {
  //   const raw = await fetch(`http://localhost:8080/rest/boxes`);
  //   console.log("raw", raw)

  //   const res = await raw.json();
  //   console.log("raw", raw)
  //   console.log("res", res)
  //   setBoxes(res)
  // }

  const getBoxes = async () => {

    let response = await fetch("http://localhost:8080/rest/boxes");
      response = await response.json();
      response.forEach((element) => {
      
        setBoxes(element);
        })}

  useEffect(() => {
    // fetchMyThreads();
    getBoxes()
  }, []);

  return (
    <div>

<h1>Item</h1>

<div className='container'>
<div className='sub-container'>
<div><h3>Name</h3></div>
<div><h3>Country</h3></div>
<div><h3>Weight</h3></div>
</div>
<div className='sub-container'>
<div>{boxes.name}</div>
<div>{boxes.country}</div>
<div>{boxes.weight}</div>
</div>
</div>
    </div>

  )
}
