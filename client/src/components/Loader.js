import React from 'react'
import loader from "../Images/loader.gif"


function Loader() {
  return (
    <div className='d-flex justify-content-center'  >
      <img style={{height:200, width:250}} src={loader} alt="" />
    </div>
  )
}

export default Loader
