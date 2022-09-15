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
 const ListNumber = toDo.length 


const newListItem = {
  id: new Date().getTime(),
  text: message,
  completed: false,
}

  setTodo([...toDo, newListItem])
  setMessage(" ")
  setModal('no-modal')
  
}

function handleDelete(todo) {


  //console.log(target)
  const updatedList = [...toDo].filter(item => {
    return item.id !== todo
    //return item.props.id > 0 }
  })

  setTodo(updatedList)


}
 

  return (
    <div className="main">
      <TaskSpace>
<Header />
{toDo.map((item) => { return <ListItem deletehandle={handleDelete} id={item.id} key={item.id} task={item.text} />})}

        </TaskSpace>
        <button onClick={() => setModal('show-modal')} className="addNew">+</button>
        <Modal original={message} addItem={(e) => setMessage(e.target.value)} closeFunction={() => setModal('no-modal')} name={modal}>
        <button onClick={handleClick} className="submit">Submit</button>
        </Modal>
     
        
        
    </div>
    
  );
}
