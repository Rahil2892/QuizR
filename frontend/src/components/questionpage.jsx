import React,{useState} from 'react'
import {question1} from "../question1"; 
import {question2} from "../question2"; 
import {question3} from "../question3"; 
import { useEffect } from 'react';
import Question from "./question.jsx";

const Questionpage = (
  {score,
  setScore,
  setShowQuestionPage,
  setShowScorePage,
  id
}
) => {
  const [questionIndex,setQuestionIndex]=useState(0);
  const [cat1, setCat1] = useState(false);
    const [cat2, setCat2] = useState(false);
  const [cat3, setCat3] = useState(false);
  useEffect(() => {
    if (id === '1' ){
    setCat1(true);
  }
  else if (id ==='2' ){
    setCat2(true);
  }
  else{
    setCat3(true);
  }
  })
  
  console.log("quiz id here", id);


  return (
    <>
    {
      cat1 &&  (<Question
    questionIndex={questionIndex}
    questions={question1}
    setQuestionIndex={setQuestionIndex}
    setShowQuestionPage={setShowQuestionPage}
    setShowScorePage={setShowScorePage}
    score={score}
    setScore={setScore}
    />)
    }
    {
      cat2 &&  (<Question
    questionIndex={questionIndex}
    questions={question2}
    setQuestionIndex={setQuestionIndex}
    setShowQuestionPage={setShowQuestionPage}
    setShowScorePage={setShowScorePage}
    score={score}
    setScore={setScore}
    />)}
    {
      cat3 &&  (<Question
    questionIndex={questionIndex}
    questions={question3}
    setQuestionIndex={setQuestionIndex}
    setShowQuestionPage={setShowQuestionPage}
    setShowScorePage={setShowScorePage}
    score={score}
    setScore={setScore}
    />)
  }
  </>
  )
}

export default Questionpage;