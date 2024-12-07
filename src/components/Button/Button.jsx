import React, {useEffect,useState,useRef} from "react";


function Button(){
    const clickRef = useRef(0);
    //call back function
    const handleClick1 = () => console.log("Yikes")
    //call back function with parameter
    const handleClick2 = (name) => console.log(`${name} please stop`)
    //call back function with condition

    useEffect(() => {
        console.log("Button render");
    })

    function handleClickCount(){
        clickRef.current++;
        console.log(clickRef.current);
    }
    //applying external style sheet to apply global style
    return(
        <>
            <button onClick={handleClickCount} className="button">Click Me </button>
        </>

    );
}

export default Button;