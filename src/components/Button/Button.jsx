
function Button(){

    const handleClick = () => console.log("Yikes")

    //applying external style sheet to apply global style
    return(
        <button onClick={handleClick} className="button">Click Me </button>
    );
}

export default Button;