import React from 'react'

function Button(props) {
  return (
    <div className='button'>
      <img src={props.img} alt="" className='img m-0' />
    </div>
  )
}

export default Button
