import React from 'react';
import './card.css'

const Card = (props) => {
  return (
    <div className='quizCardCont' >
          <div className='quizcard'>{props.children}</div>
    </div>
  )
}

export default Card;