import React, {useState} from "react";
import "./style.css";
import TaskSpace from './task-space.js'
import Header from './header.js'
import Modal from './modal.js'
import ListItem from './list-item.js'

export default function App() {

const [modal, setModal] = useState('no-modal')
const [toDo, setTodo] = useState([])
 
const toDoArray = []

let currentList = 0;

function addItem() {
  const inputVal = document.querySelector('.get')
  const newInputVal = inputVal.value

  setTodo(toDo.push(inputVal))



}




  return (
    <div className="main">
      <TaskSpace>
<Header />
<ListItem item={toDo}/>
<ListItem />
        </TaskSpace>
        <button onClick={() => setModal('show-modal')} className="addNew">+</button>
        <Modal addItem={addItem()} closeFunction={() => setModal('no-modal')} name={modal} />
        
    </div>
    
  );
}
