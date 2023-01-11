import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'
import { uid } from 'uid'
import { AddItem } from '../redux/actions'
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'

export const Home = () => {
    const [currentInput, setCurrentInput] = useState('')
    const dispatch = useDispatch()
    const posts = useSelector(state => state.manipulate)
    const formRef = useRef()
    const id = uid()

    const inputHandler = event => {
        setCurrentInput(event.target.value)
        console.log(currentInput)
    }

    const clickHandler = () =>{
       currentInput.trim() && dispatch(AddItem({data: currentInput, id, date: new Date()}))
       toast.success("Item has been successfully added")
       formRef.current.reset()
    }


  return (
    <>
    <ToastContainer></ToastContainer>
   
    <div className="container">
    <div className='add-form'>
        <h1>Add Post</h1>
        <div className='Home'>
        <form ref={formRef} onSubmit={(event)=>{event.preventDefault()}} action="">
            <input onChange={inputHandler} type="text" name="" id="" placeholder='Add a post' />
            <button onClick={clickHandler}>ADD</button>
        </form>
    </div>
    </div>
     <div className="number-of-posts">
     {
         posts.length
     }
 </div>
 </div>
 </>
  )
}
