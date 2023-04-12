import React from 'react'

const Seekbar = () => {
  return (
    <div className='seekbar flex'>
      <input className='slider' type="range" name="" id="" min="0" max='100' />
      <div draggable='true' className="duration flex">
        <p>00:00</p>
        <p>10:02</p>
      </div>
    </div>
  )
}

export default Seekbar