import React, {useState, useContext} from "react";
import {FeedbackContext } from "../../Feedback.jsx";



function Bad(){

    const feed = useContext(FeedbackContext);
    return(
        <>
        <p>{feed} Quality</p>
        </>
    )
}

export default Bad;