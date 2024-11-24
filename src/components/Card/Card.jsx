import Food from "../Food/Food";
import bananaImg from '../../assets/banana.png';
import appleImg from '../../assets/apple.png';
import orangeImg from '../../assets/orange.png'
import Drinks from '../Drinks/Drinks.jsx'

function Card(){

    return(
        //applying module style sheet 
        //using other component in a component
        <>
            <div className="card">
                <p>Pick one fruit</p>
            </div>
            <Food fruitImg={bananaImg} fruit="Banana" isAvailable={true}/>
            <Food fruitImg={appleImg} fruit="Apple" isAvailable={true}/>
            <Food fruitImg={orangeImg} fruit="Orange" isAvailable={false}/>
            <Food/>
            <Drinks />
            
        </>

    );
}

export default Card;