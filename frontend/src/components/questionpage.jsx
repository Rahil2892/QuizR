import React,{useState} from 'react'
import {questions} from "../questions";
import Question from "./question.jsx";

const Questionpage = (
  {score,
  setScore,
  setShowQuestionPage,
  setShowScorePage,}
) => {
  const [questionIndex,setQuestionIndex]=useState(0);


  return (
    <Question
    questionIndex={questionIndex}
    questions={questions}
    setQuestionIndex={setQuestionIndex}
    setShowQuestionPage={setShowQuestionPage}
    setShowScorePage={setShowScorePage}
    score={score}
    setScore={setScore}
    />
  )
}

export default Questionpage;