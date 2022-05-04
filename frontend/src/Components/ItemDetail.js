import React, {useEffect, useState} from 'react'

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

const [boxes, setBoxes] = useState([{}]);

  async function fetchMyThreads() {
    const raw = await fetch(`/rest/boxes`);
    const res = await raw.json();

    setBoxes(res)
  }

  useEffect(() => {
    fetchMyThreads();
  }, []);

  return (
    <div>

<h1>Item</h1>
<h3>{boxes}</h3>
    </div>

  )
}
