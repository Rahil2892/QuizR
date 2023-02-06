import { useState } from "react";
import Scorepage from "./scorepage";
import Startingpage from "./startingpage";
import Questionpage from "./questionpage";
import { useParams } from 'react-router-dom';


function Quiz(){
    const {id} = useParams();
    console.log("link id here",id);
    const [showStartingPage, setShowStartingPage]=useState(true);
    const [showQuestionPage, setShowQuestionPage]=useState(false);
    const [showScorePage, setShowScorePage]=useState(false);

    const [score,setScore]=useState(0);
    const[topscore,setTopScore]=useState(0);

    return(
        <>
        {showStartingPage && (<Startingpage 
        setShowStartingPage={setShowStartingPage} 
        setShowQuestionPage={setShowQuestionPage} 
        topscore={topscore}
        setTopScore={setTopScore} 
        />
        )} 
        {showQuestionPage && (<Questionpage 
            // bank = {1/2/3}
        id = {id}
        score={score} 
        setScore={setScore} 
        setShowQuestionPage={setShowQuestionPage} 
        setShowScorePage={setShowScorePage}/>
        )}
        {showScorePage && (<Scorepage 
        score={score} 
        setScore={setScore} 
        topscore={topscore} 
        setTopScore={setTopScore} 
        setShowStartingPage={setShowStartingPage}
        setShowScorePage={setShowScorePage}/>
        )}
        </>
    )


}
export default Quiz;