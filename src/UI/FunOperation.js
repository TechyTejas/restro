import React from 'react'
 
export default function FunOperation(props) {
    
  return (
    <div >
        {
        props.Items.map((data)=>(
        <li>
        {data.id}
        {data.di}
        {data.pr}
        {data.ty}
        </li>
        ))
        }
        <h2 id="h1">Table 1</h2>
        <ul id="A"></ul>
        <h2 id="h2">Table 2</h2>
        <ul id="B"></ul>
        <h2 id="h3">Table 3</h2>
        <ul id="C"></ul>
    </div>
  )
}
