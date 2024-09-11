import React, { useState } from 'react'

function Form() {
    const [name,setName]=useState('')
    const [email,setEMail]=useState('')

    const submit =((e)=>{
        e.preventDefault()
        console.log(name,email)
    })
  return (
    <div className='w-[80%] '>
        <form action="" className=' ml-20 pt-20'>
            <div>
            <label htmlFor="">Name</label>
            <input className='border-2' type="text" placeholder='Enter The Name' value={name} onChange={((e)=>{
                setName(e.target.value)
            })}/>
            </div>
                <div>
                <label htmlFor="">Email</label>
            <input className='border-2' type="text" placeholder='Enter The mail' value={email}  onChange={((a)=>{
                setEMail(a.target.value)
            })}/>
                </div>

            <button onClick={submit}>Save</button>
        </form>
    </div>
  )
}

export default Form