import React,{useState, useEffect, useRef} from 'react'

function TodoForm(props) {
    const[input, setInput] =useState(props.edit ? props.edit.value : '');

    const inputRef =useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })
    const handleChange = e =>{
        setInput(e.target.value)
    }
    const handleAdd = e =>{
        e.preventDefault()
        props.onSubmit({
            id:Math.floor(Math.random()*10000),
            text: input
        })
      setInput('')
    }
        
    return (
        <div>
            <form className='todo-form'  onSubmit={handleAdd}>
          {props.edit ?(
            <>
          <input 
          type='text' 
          placeholder='Add todo' 
          value={input} className='todo-input edit' 
          onChange={handleChange} 
          ref={inputRef}/>
          <button className='todo-button edit'>Update Todo</button> 
          </>
          )
          :
          (
            <>
          <input 
          type='text' 
          placeholder='Add todo' 
          value={input} className='todo-input' 
          onChange={handleChange} 
          ref={inputRef}/>
          <button className='todo-button'>Add Todo</button> 
          </>
          )}
          
        </form>
        </div>
      )
    

}
    
    export default TodoForm
