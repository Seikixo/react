
function Drinks(){
    //Renderi List
    const drinks = [
        {id: 1, name: "Coke", calories: 140}, 
        {id: 2, name: "Sprite", calories: 140}, 
        {id: 3, name: "Pepsi", calories: 150}, 
        {id: 4, name: "7Up", calories: 140}];

    const listOfDrinks = drinks.map(drink => <li key={drink.id}> {drink.name}: &nbsp; {drink.calories} </li>);

    return(
        <ul>
            {listOfDrinks}
        </ul>
    )
}

export default Drinks;