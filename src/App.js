import React, { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [userInfo, setUserInfo] = useState({
    name: '',
    password: '',
    email: ''
  })
  const [isButtonDisabled, setIsButtonDisabled] = useState(true)

  const handleOnChange = (event) => {
    const {
      target: { value, name }
    } = event

    setUserInfo((prev) => {
      return {
        ...prev,
        [name]: value
      }
    })
  }

  const handleOnSubmit = (event) => {
    event.preventDefault()
    alert('Successfuly registered!')
  }

  useEffect(() => {
    const { name, password, email } = userInfo
    const isButtonEnabled = !!name && !!password && !!email
    setIsButtonDisabled(!isButtonEnabled)
  }, [userInfo])

  return (
    <div className='App'>
      <form onSubmit={handleOnSubmit}>
        <label htmlFor='name'>Name</label>
        <input value={userInfo.name} id='name' name='name' type='text' onChange={handleOnChange} />
        <label htmlFor='email'>Email</label>
        <input value={userInfo.email} name='email' type='email' onChange={handleOnChange} />
        <label htmlFor='password'>Password</label>
        <input
          value={userInfo.password}
          id='password'
          name='password'
          type='password'
          onChange={handleOnChange}
        />
        <button disabled={isButtonDisabled} type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default App
