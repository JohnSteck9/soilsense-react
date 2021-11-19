import React, {useEffect, useState} from 'react';
import Item from './Item';
import {getAllItems} from "../hooks/useAPI";

const ItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems()
            .then(res => {
                setItems(res.data.Items);
            })
            .catch(e => { console.error(e) })
            .then(arr => { console.log(arr) })

    }, []);

  return (
    <React.Fragment>
      <div className="book-list">
          { items.map(q => (<Item key={q.id.S} {...q}/> ))}
      </div>
    </React.Fragment>
  );
};

export default ItemsList;
