import React from 'react'

export default function Header(props) {

const character = "https://www.pngitem.com/pimgs/m/493-4932729_8-bit-character-sprites-hd-png-download.png"

  return (
  <div className="header">
    <div className="avatar"><img src={character} /></div>
    <div className="info">
      <p>Name</p>
      <p>Level: 1</p>
      <div class="progress-bar"><div className="actual-progress"></div></div>
      </div>

  </div>
  )
}