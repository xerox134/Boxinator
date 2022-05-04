import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export default function Store() {

  useEffect(()=>{
    fetchItems();
  },[]);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');

    const items = await data.json();
    console.log(items.data);
    setItems(items.data)
}

  return (
    <div>

{items.map(item => (
                <h6 key={item.itemId}>
                  <Link to={`/Store/${item.itemId}`}>
                  {item.item.name}
                  </Link>
                
                </h6>
            ))}

    </div>

  )
}
