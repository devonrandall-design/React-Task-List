import React from 'react'

export default function ListItem(props) {

  return <div id={props.id} className="list-container">
<input class="check" type="checkbox" />
<h4>{props.task}</h4>
<button>Edit</button>
<button onClick={() => props.deletehandle(props.id)}>Del </button>
    </div>
}