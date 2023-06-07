import React ,{useState} from 'react'

function Structure (props) {
  const[enterId,setEnterId]=useState('');
  const[enterPrice,setEnterPrice]=useState('');
  const[enterDish,setEnterDish]=useState('');
  const[enterType,setEnterType]=useState('Table 1');

  function IdChangeHandler(event){
   setEnterId(event.target.value)
  }
  
  function PriceChangeHandler(event){
    setEnterPrice(event.target.value)
  }

  function DishChangeHandler(event){
     setEnterDish(event.target.value);
  }

  function TypeChangeHandler(event){
    setEnterType(event.target.value);
  }

  function submitHandler(event){
    event.preventDefault();
    
    const OrderDetails={
      id:enterId,
      pr:enterPrice,
      di:enterDish,
      ty:enterType
    }
    props.onAddItem(OrderDetails.id,OrderDetails.pr,OrderDetails.di,OrderDetails.ty);  // we lift state here :}

    console.log(OrderDetails);
    setEnterDish("")
    setEnterId("")
    setEnterPrice("")
    setEnterType("")
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Unique Order ID</label>
        <input type="text" value={enterId} onChange={IdChangeHandler}></input>

        <label>Choose Price</label>
        <input type="number" value={enterPrice} onChange={PriceChangeHandler}></input>

        <label>Choose dish</label>
        <input type="text" value={enterDish} onChange={DishChangeHandler}></input>

        <label for="types"  >Table</label>
        <select value={enterType}  onChange={TypeChangeHandler}>
            <option>Tabel 1</option>
            <option>Tabel 2</option>
            <option>Tabel 3</option>
        </select>
        <button type="submit">Add Item</button>
    </form>
    </div>
  )
}


export default Structure;