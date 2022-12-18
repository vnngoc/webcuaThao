import React from 'react'
import Meooo from '../image/meo8.gif'
import Meoooo from '../image/meo9.gif'
import Broke from '../image/broke.gif'
function About() {
  const [visible, setVisible] = React.useState(false);
  const [visiblee, setVisiblee] = React.useState(false);
  const [visibleee, setVisibleee] = React.useState(false);
  

  return (
    <div className="todo-app">
    <div>
      <div>
      <img
        className="image-aboutt"
        src={Meooo}
        alt="Meooo avatar"
      />
      <img
        className="image-abouttt"
        src={Meoooo}
        alt="Meoooo avatar"
      />
      <h1 className='context'> Em đây roàiiiii </h1>
      {/* <p className='contextt'> Anh code cái web này mà Anh cười suốt đóa </p>
      <p className='contextt'> Tại là quá thích Emm roài nèe </p> */}
      <p className="contextt">Em bấm cái nút này nèee</p>
      
      
      </div>
    </div>
    <div>
      <div class='buttons'><button class='buttoningg' onClick={() => setVisible(true)}>🎁</button></div>
      {visible && 
      <div className='text'>
        <p>Emm ui anh mún hỏi là</p>
        <div class='buttons'><button class='buttoningg' onClick={() => setVisibleee(true)}>🎁</button></div>
      {visibleee && 
      <div className='text'>
        <p>Hong ấy khi nào em rảnh mình đi đâu chơi em chịu hong</p>
        <p>Em Okee thì chọn tiếp nheaa</p>
        <div className="container-desc__wrapper">
      <div className="container-desc">
      <a className='buttoningg' href="/about">Oke nhea</a>
      <button className='buttoned' onClick={() => setVisiblee(true)}>Nooo</button>
      {visiblee && 
      <div className='contextt'>
        <img
        className="img-about"
        src={Broke}
        alt="Broke avatar"
      />
      </div>}
      </div>
    </div>
      </div>}
      </div>}
    </div>
    
  </div>
  )
}

export default About