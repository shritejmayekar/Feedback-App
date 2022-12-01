import React from 'react'
import SpinnerImg  from '../assets/spinner.gif'
function Spinner() {
  return (
    <img src={SpinnerImg} alt='Loading...' style={{width:'100px',margin:'auto',display:'block'}}
    
    />
  )
}

export default Spinner