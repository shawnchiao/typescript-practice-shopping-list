import React, { useRef } from 'react';

interface ShoppingListFormProps {
  onAddItem:(product:string, quantity:number)=> void;
}


const ShoppingListFrom = ({onAddItem}:ShoppingListFormProps) :JSX.Element => {

  const productInputRef = useRef<HTMLInputElement>(null);
  const quantityInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    onAddItem(productInputRef.current!.value, parseInt(quantityInputRef.current!.value));
    console.log(quantityInputRef.current!.value)
    productInputRef.current!.value = "";
    quantityInputRef.current!.value= '0'
  }
  
  return(
    <form onSubmit={submitHandler}>
    <input ref={productInputRef} type="text" placeholder="item's name"/>
    <input ref={quantityInputRef} type="number" placeholder="number" min='0'/>
    <button type="submit"> Add Item </button>
    </form>
  )
} 

export default ShoppingListFrom;