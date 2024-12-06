import React, {useState, createContext} from "react";
import Good from "./Good/Good.jsx";
export const FeedbackContext = createContext();

function Feedback(){

    const [feedback, setFeedback] = useState('Good Service');

    return(
        <>
        <p>Feedback: {feedback}</p>
        <FeedbackContext.Provider value={feedback}>
            <Good feed={feedback}/>
        </FeedbackContext.Provider>
        </>
    );
}

export default Feedback;