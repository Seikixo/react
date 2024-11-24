
function Drinks(){
    //Renderi List
    const drinks = [
        {id: 1, name: "Coke", calories: 140}, 
        {id: 2, name: "Sprite", calories: 140}, 
        {id: 3, name: "Pepsi", calories: 150}, 
        {id: 4, name: "7Up", calories: 140}];

    //sorting array using .sort method

    drinks.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
    //drinks.sort((a, b) => b.name.localeCompare(a.name)); Reverse Alphabetical Order
    //drinks.sort((a, b) => a.calories - b.calories); Asceding 
    // drinks.sort((a, b) => b.calories - a.calories); Descending

    const listOfDrinks = drinks.map(drink => <li key={drink.id}> {drink.name}: &nbsp; {drink.calories} </li>);

    return(
        <ul>
            {listOfDrinks}
        </ul>
    )
}

export default Drinks;