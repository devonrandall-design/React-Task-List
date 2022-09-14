import React, {useState} from "react";
import "./style.css";
import TaskSpace from './task-space.js'
import Header from './header.js'
import Modal from './modal.js'
import ListItem from './list-item.js'

export default function App() {

const [modal, setModal] = useState('no-modal')
const [toDo, setTodo] = useState([])
const [message, setMessage] = useState(' ')
 
const toDoArray = []

function handleClick() {
  setTodo( [...toDo, <ListItem task={message}/>])
  setModal('no-modal')
}









  return (
    <div className="main">
      <TaskSpace>
<Header />
{[...toDo]}

        </TaskSpace>
        <button onClick={() => setModal('show-modal')} className="addNew">+</button>
        <Modal addItem={(e) =>  setMessage(e.target.value)} closeFunction={() => setModal('no-modal')} name={modal}>
        <button onClick={handleClick} className="submit">Submit</button>
        </Modal>
        
    </div>
    
  );
}
