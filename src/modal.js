import React from 'react'

export default function Modal(props) {

  return <div className={props.name}>
  <div className="modal-header">
    <div className="title"><h1>Create New Task</h1></div>
    <div className="close"><button onClick={props.closeFunction}>x</button></div>
  </div>
  <div onChange={props.addItem} className="input-container">
  <input value={props.original}  className="get" type="text"  />
  {props.children}
  </div>
</div>

}