import React, { useState } from 'react';
import {v4 as createID} from 'uuid';

import Todos from './components/Todos';
import Item from './model/item';
import ShoppingListForm from './components/ShoppingListForm';
import './App.css';

// const data = [
//   {id: 1 , product:'Rice', quantity: 3} , { id:2 , product: 'Lemon', quantity: 4}
// ]



function App() {
  const [data, setData] = useState<Item[]>([]);

  const addItem = (product:string, quantity:number) => {
    setData([...data, {id:createID(), product, quantity}]);
  }
  console.log(data);
  
  return (
    <div>
   
      <Todos items={data}/>
      <ShoppingListForm onAddItem={addItem}/>;
      
    </div>
  );
}

export default App;
