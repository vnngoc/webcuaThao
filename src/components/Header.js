import React from 'react'
function Header() {
 
  return (
    <div><nav
    className="navbar navbar-expand-lg bg-light mb-3"
    style={{ height: "50px", backgroundColor: "rgba(0,0,0,0.6)"}}
    
  >
    <div className="container-fluid" style={{display: "flex" , justifyContent: "center", alignItems: "center", lineHeight: "50px"}}>
      
      
      
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul
          className="navbar-nav"
          style={{ display: "flex", alignItems: "center" }}
        >

         <p className='contexttt'>CODE BY AKI A.K.A MIN NGỌT</p>
            
             
            
        </ul>
      </div>
    </div>
  </nav></div>
    
  )
}

export default Header