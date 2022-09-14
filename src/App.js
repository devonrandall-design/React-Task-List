import React, {useState} from "react";
import "./style.css";
import TaskSpace from './task-space.js'
import Header from './header.js'
import Modal from './modal.js'

export default function App() {

const [modal, setModal] = useState('no-modal')


  return (
    <div className="main">
      <TaskSpace>
<Header />
        </TaskSpace>
        <button onClick={() => setModal('show-modal')} className="addNew">+</button>
        <Modal closeFunction={() => setModal('no-modal')} name={modal} />
        
    </div>
    
  );
}
