import React from 'react';
import './card.css'

const Card = (props) => {
  return (
    <div className='quizcard'>{props.children}</div>
  )
}

export default Card;