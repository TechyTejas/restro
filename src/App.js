import React, { useState } from 'react';
import './App.css';
import FunOperation from './UI/FunOperation';
import Structure from './UI/Structure';

function App() {
  const [orders, setOrders] = useState([]);

  function getData(id, pr, di, ty) {
    setOrders((prevData) => {
      return [
        ...prevData,
        { id: id, pr: pr, di: di, ty: ty },
      ];
    });
  }

  return (
    <React.Fragment>
      <Structure onAddItem={getData} />
      <FunOperation Items={orders} />
    </React.Fragment>
  );
}

export default App;
