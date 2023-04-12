import React from 'react'
import { BiRepeat, BiShuffle, BiSkipNext, BiSkipPrevious } from 'react-icons/bi'
import {FaPauseCircle, FaPlayCircle, FaReply } from 'react-icons/fa'


const Controls = () => {
  return (
    <div className='controls flex'>
      <BiRepeat className='side-controls' title='repeat'/>
      <BiSkipPrevious className="main-controls" title='previous'/>
      <FaPlayCircle className="main-controls" title='play'/>
      {/* <FaPauseCircle/ className="main-controls" title="pause"> */}
      <BiSkipNext className="main-controls" title='next'/>
      <BiShuffle className='side-controls' title='shuffle'/>
    </div>
  )
}

export default Controls