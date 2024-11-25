
function Button(){

    const handleClick1 = () => console.log("Yikes")

    const handleClick2 = (name) => console.log(`${name} please stop`)

    //applying external style sheet to apply global style
    return(
        <button onClick={() => handleClick2("Seikizo")} className="button">Click Me </button>
    );
}

export default Button;