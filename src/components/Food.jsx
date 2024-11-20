
function Food(){

    const apple = "Apple";
    const orange = "Orange";

    return(
        <ul>
            <li>Banana</li>
            <li>{apple}</li>
            <li>{orange.toUpperCase()}</li>
        </ul>
    );
}

export default Food;