import bananaImg from '../../assets/banana.png'
import appleImg from '../../assets/apple.png'
import orangeImg from '../../assets/orange.png'
import style from './Food.module.css'

function Food(){

    const apple = "Apple";
    const orange = "Orange";

    return(
        <ul className={style.fruitscontainer}>
            <li className={style.fruits}><img src={bananaImg} alt="" className={style.icon}/>Banana</li>
            <li className={style.fruits}><img src={appleImg} alt="" className={style.icon} />{apple}</li>
            <li className={style.fruits}><img src={orangeImg} alt="" className={style.icon} />{orange.toUpperCase()}</li>
        </ul>
    );
}

export default Food;