import React, { useState } from 'react'
import { useDispatch,useSelector } from "react-redux";
import { setName } from '../store/userSlice';
import { useNavigate } from 'react-router-dom';

function Detail() {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [uName,setUName] =  useState('')

  const takingName = () =>{
    dispatch(setName(uName))
    setUName('')

    if (uName !== null && uName !== undefined && uName.trim() !== '') {
      navigate('/chat');
    }
    else{
      alert("empty field")
    }

  }

  return (
    <div className='text-center'>
      <h1 >
      Enter your name 
      </h1>
      <input type="text" value={uName} onChange={(e) => setUName(e.target.value)} className='form-control ms-auto me-auto my-3 w-50 ' />
      <button onClick={()=>{
        takingName()
      }} >Save</button>
    </div>
  )
}

export default Detail
