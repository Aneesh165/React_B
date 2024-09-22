import React from 'react'
import tick from '../assets/tick.png'
import not_tick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

function Todoitems({text, id, isComplete, deletion, toggle}) {


  return (
    <div className='flex items-center my-3 gap-2'>
      <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer '>
        <img className='w-7' src={isComplete ? tick : not_tick} alt="" />
        <p className={`text-slate-700 ml-4 text-[17px] 
          ${isComplete ? 'line-through' : ''} decoration-slate-500`}>{text}</p>
      </div>

      <img className='w-3.5 cursor-pointer' onClick={()=>{deletion(id)}} src={delete_icon} alt="" />
    </div>
  )
}

export default Todoitems