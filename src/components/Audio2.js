import React from 'react'
import Nhaccccc from '../image/obito.mp3'
import CD from '../image/cdmusic.gif'
function Audio() {
  

  return (
    <div className="todo-app">
    <div className='box'>
    <img
        className="imagee-aboutt"
        src={CD}
        alt="DiaCD avatar"
      />
      <div className='contextt'>
    <div className='text'>
    <audio className='audio' autoPlay
        controls
        src={Nhaccccc}>
    </audio>
    <p>Your Smile - obito&hnhngan</p>
    <p>Con mèo là Play/Pause đóa</p>
    </div>
    </div>
    
    <a className='buttoninggggg' href="/hello">Continue</a>
  </div>
  </div>
  )
}

export default Audio