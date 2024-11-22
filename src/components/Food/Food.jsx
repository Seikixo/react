import bananaImg from '../../assets/banana.png'
import appleImg from '../../assets/apple.png'
import orangeImg from '../../assets/orange.png'
import style from './Food.module.css'

function Food(props){


    const apple = "Apple";
    const orange = "Orange";

    return(
        <ul className={style.fruitscontainer}>
            <li className={style.fruits}><img src={bananaImg} alt="" className={style.icon}/>{props.isAvailable ? "Available" : "Not Available"} Banana</li>
            <li className={style.fruits}><img src={appleImg} alt="" className={style.icon} />{props.isNotAvailable ? "Available" : "Not Available"} {apple}</li>
            <li className={style.fruits}><img src={orangeImg} alt="" className={style.icon} />{props.isAvailable ? "Available" : "Not Available"} {orange.toUpperCase()}</li>
        </ul>
    );
}

export default Food;