import React from 'react'
import {useNavigate} from 'react-router-dom'
import './App.css'

function AddBook() {

    const nav=useNavigate();

    const handleSubmit=()=>{
        nav('/')
    }
  return (
    <div className='form'>
        <form>
      <input type='text' placeholder='Title'></input><br></br>
      <input type='text' placeholder='Author'></input><br></br>
      <textarea placeholder='Description'></textarea><br></br>
      <input type='url' placeholder='Cover Image URL'></input><br></br>
      <button onClick={handleSubmit} className=''>Submit</button><br></br>
      </form>
    </div>
  )
}

export default AddBook
