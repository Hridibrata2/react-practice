import React, { useState } from 'react'

const Form = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert(`Hello ${username}`)
    }

  return (
   <form onSubmit={handleSubmit}>
    <div>
        <lable>Username</lable>
        <input type="text" 
        value={username} 
        placeholder="Enter your name"
        onChange={(e) => setUsername(e.target.value)}
        />
    </div>
    <button type='submit'>Submit</button>
   </form>
  )
}

export default Form