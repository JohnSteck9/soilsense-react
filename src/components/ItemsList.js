import React, {useEffect, useState} from 'react';
import Item from './Item';
import {getAllItems, getAllItems2} from "../hooks/useAPI";

const ItemsList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getAllItems()
            .then(res => {
                console.log(res);
                if(res){
                    if(res.data){
                        setItems(res.data);
                    } else {
                        setItems(res);
                    }
                    // return res
                } else {
                    getAllItems2()
                        .then(res2 => {
                            if(res2.data){
                                setItems(res2.data);
                            } else {
                                setItems(res2);
                            }
                            // return res2
                        })
                        .catch(e => console.error(e))
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
