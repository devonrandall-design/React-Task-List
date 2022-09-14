import React from 'react'

export default function ListItem(props) {

  return <div className="list-container">
<input class="check" type="checkbox" />
<h4>{props.task}</h4>
<button>Edit</button>
<button>Del </button>
    </div>
}