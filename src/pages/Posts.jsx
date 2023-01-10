import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteItem, UpdateItem } from '../redux/actions'
import { toast, ToastContainer } from 'react-toastify';
import './Posts.css'
import 'react-toastify/dist/ReactToastify.css';


export const Posts = () => {

  const posts = useSelector(state => state?.manipulate)
  const [contentEditable, setContentEditable] = useState(false)
  const [currentElement, setCurrentElement] = useState(null)
  const [update, setUpdate] = useState(null)
  const dispatch = useDispatch()

  const editHandler = function (event) {
    setContentEditable(true)
    setCurrentElement(event.target.id)
    setTimeout(() => {
      const dataField = document.querySelector(`div[id="${event.target.id}"]`)
      dataField.focus()
      dataField.style.backgroundColor = "white"
      dataField.style.color = "black"
      dataField.style.padding = ".5rem"
      dataField.style.borderRadius = '5px'
    }, 0)
  }

  const editInputHandler = event => {
    setUpdate(event.target.textContent)
    console.log(update)
  }

  const updateConfirmHandler = (event) => {
    dispatch(UpdateItem({ data: update, id: currentElement, date: new Date() }))
    const dataField = document.querySelector(`div[id="${event.target.id}"]`)
    dataField.style.backgroundColor = "black"
    dataField.style.color = "white"
    setCurrentElement(null)
    toast.success("Item has been modified")
  }

  return (
    <>
    <ToastContainer></ToastContainer>
    <div className='Posts'>
      {
        posts.length ? posts.map(item => {
          return (
            <div key={item?.id} className="item">
              <div onInput={editInputHandler} id={item?.id} suppressContentEditableWarning contentEditable={contentEditable} className="data">{item?.data}</div>
              <p className='date'>{item.date.toUTCString()}</p>
              <div className="controllers">
                {currentElement === item.id ? <button id={item?.id} onClick={updateConfirmHandler} className='confirm'>Confirm</button> : null}
                <button id={item?.id} onClick={editHandler} className='edit'>Edit</button>
                <button id={item.id} onClick={(event) => {
                  dispatch(DeleteItem(event.target.id))
                  toast.success("Item has been successfully removed")
                }} className="delete">Delete</button>
              </div>
            </div>
          )
        })
      : <h1 style={{color: 'white'}}>No post to display!</h1>
      }

    </div>
    </>
  )
}
