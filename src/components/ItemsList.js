import React, {useEffect, useState} from 'react';
import Item from './Item';
import {getAllItems, getAllItems2} from "../hooks/useAPI";

const ItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems()
            .then(res => {
                console.log(res);
                setItems(res.data);

                if(!res?.data) {
                    getAllItems2()
                        .then(res2 => {
                            console.log(res2);
                            setItems(res2?.data);
                        })
                }


                return items;
            })
            .then(arr => { console.log(arr) })
            .catch(e => { console.error(e) })


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
