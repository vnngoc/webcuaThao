import React from 'react'
import Nhacccc from '../image/oish.mp3'
import CD from '../image/cdmusic.gif'
function Audio() {
  

  return (
    <div className="todo-app">
    <div className='boxx'>
    <img
        className="imagee-aboutt"
        src={CD}
        alt="DiaCD avatar"
      />
      <div className='contextt'>
    <div className='text'>
        <audio className='audio' autoPlay
        controls
        src={Nhacccc}>
    </audio>
    <p>Oish - HieuThuHai</p>
    <p>Con mèo là Play/Pause đóa</p>
    </div>
    </div>
    <a className='buttoningggg' href="/audio2">⏭️</a>
  </div>
  </div>
  )
}

export default Audio