import React from 'react'
import Meeo from '../image/dragonbye.gif'
function About() {
  const [visiblee, setVisiblee] = React.useState(false);
  return (
    
    <div className="container-about">
    <div>
      <div className="title-heading">Trang này là trang cuối roài nèee</div>
    </div>

    <div className="container-desc__wrapper">
      <div className="container-desc">
        <p className="context">Nhưng mà hiện tại web này em chọn gì anh cũng hỏng biết được á</p>
        <p className="context">Anh code được tới đây hỏng biết ổn chưa nữa</p>
        <p className="context">Nên là có gì thì em nhắn anh với nhee</p>
        <p className="context">Xong roài nèee</p>
        <button className='buttoned' onClick={() => setVisiblee(true)}>Đây nheaa</button>
        {visiblee && 
      <div className='contextt'>
        <img
        className="imageee-about"
        src={Meeo}
        alt="Broke avatar"
      />
      </div>}
      </div>
    </div>
  </div>
  )
}

export default About