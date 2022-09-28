import React from 'react'

function Book({img, title, author}) {
  // attribute, eventHandler
  // onClick, onMouseOver
  const clickHandler = (event) => {
    console.log(event)
    console.log(event.target)
  }
  const complexExample = (author) => {
    console.log(author)
  }
  return (
    <article className='book'>
        <img src={img} alt="" />
        <h1 onClick={() => {console.log(title)}}>{title}</h1>
        <h4>{author}</h4>
        <button type='button' onClick={clickHandler}>example</button>
        <button type='button' onClick={() => {complexExample(author)}}>complex</button>
    </article>
  )
}

export default Book