import React from 'react'
import { Link } from "react-router-dom";

const Card = (props) => {
  const nextBtn = () => {
    const { history } = this.props;

    history.push("/display");
  };
  return (
    <div className='flex flex-col space-y-0 bg-white rounded-lg w-72 ' >
            <img src={props.cardImage} alt='category' className='rounded-tr-lg rounded-tl-lg h-48 ' />
        <div className=' h-52 mx-auto flex-col items-center text-center justify-center flex space-y-8 px-4 ' >
            <h3>{props.catName}</h3>
            <p>{props.catDef}</p>
            <Link to={`/quiz/${props.catId}`}>
            <button onClick={nextBtn} className="nextBtn">
              Play
            </button>
            </Link>
        </div>
    </div>
  )
}

export default Card;