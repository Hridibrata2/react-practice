import React from 'react'

const clickHandler = (event, count = 1) => {
  console.log('Button clicked!', count, event)
}

const ClickHandler = () => {
  return (
    <div>
        <button onClick={clickHandler}>Click</button>
        <button onClick={(event) => clickHandler(event, 5)}>Click 5</button>

    </div>
  )
}

export default ClickHandler