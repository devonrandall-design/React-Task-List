import React from 'react'

export default function Modal(props) {

  return <div className={props.name}>
  <div className="modal-header">
    <div className="title"><h1>Create New Task</h1></div>
    <div className="close"><button onClick={props.closeFunction}>x</button></div>
  </div>
  <div className="input-container">
  <input type="text"  />
  <button className="submit">Submit</button>
  </div>
</div>

}