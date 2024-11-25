
function Drinks(){
    //Renderi List
    const drinks = [
        {id: 1, name: "Coke", calories: 140}, 
        {id: 2, name: "Sprite", calories: 140}, 
        {id: 3, name: "Pepsi", calories: 150}, 
        {id: 4, name: "7Up", calories: 140}
    ];

    //Sorting array using .sort method
    drinks.sort((a, b) => a.name.localeCompare(b.name)); // Alphabetical Order
    //drinks.sort((a, b) => a.calories - b.calories); Asceding Number


    //Filtering array using .filter method
    const lowCalDrinks = drinks.filter(drink => drink.calories < 150);

    //Creating another array using .map method
    const listOfDrinks = drinks.map(drink => <li key={drink.id}> 
                                                {drink.name}: 
                                                &nbsp; {drink.calories} 
                                            </li>);

    const listOfLowCalDrinks = lowCalDrinks.map(lowCalDrink => <li key={lowCalDrink.id}>
                                                                    {lowCalDrink.name}:
                                                                    &nbsp; {lowCalDrink.calories}
                                                                </li>)

    return(
        <>
            <ul>
                {listOfDrinks}
            </ul>

            <p>Low Calories Drinks</p>
            <ul>
                {listOfLowCalDrinks}
            </ul>
        </>

    )
}

export default Drinks;