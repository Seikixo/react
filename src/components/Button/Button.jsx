
function Button(){
    let count = 0;
    //call back function
    const handleClick1 = () => console.log("Yikes")
    //call back function with parameter
    const handleClick2 = (name) => console.log(`${name} please stop`)
    //call back function with condition
    const handleClickCount = (name) => {
        if(count < 3){
            count++;
            console.log(`${name} you clicked me ${count} times`)
        }
        else{
            console.log(`${name} stop it`)
        }
    }

    //applying external style sheet to apply global style
    return(
        <button onClick={() => handleClickCount("Seikizo")} className="button">Click Me </button>
    );
}

export default Button;