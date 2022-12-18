
import React from 'react'
import Meeo from '../image/meo10.gif'
function About() {

  return (
    <div className="todo-app">
    <div className='apps'>
      <div>
      <img
        className="imaggee-about"
        src={Meeo}
        alt="Meeo avatar"
      />
      <h1 className='Heading' >HÉ LU EM NÈE</h1>
      <p className="context">Web cho bé Thảo xong roài đâyyy</p>
      <p className="context">Web hỏng có nhiều thứ nhma anh thấy nó tếu nheaa</p>
      <p className="context">Có mấy trang thoai nèee </p>
      </div>
    </div>
    <div className="container-desc__wrapper">
      <div className="container-desc">
      <a className='buttoningggg' href="/audio">🎁</a>
        
      </div>
    </div>
  </div>
  )
}

export default About