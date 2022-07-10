import React from 'react';
import Item from '../model/item';


interface ShoppingListProps {
  items: Item[];
}

const Todos = ({items}:ShoppingListProps): JSX.Element => {

  return (
    
    <div>
      <h1>Shopping List</h1>
      <ul>
        {items.map( (item) => (
          <li>{item.product}-{item.quantity}</li>
        ))}
         
        
      </ul>
    </div>
  )
}

export default Todos;
