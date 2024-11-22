import style from './Food.module.css'
import PropTypes from 'prop-types';

function Food(props){

    return(
        <ul className={style.fruitscontainer}>
            <li className={style.fruits}>
                <img src={props.fruitImg} alt="" className={style.icon}/>
                {props.fruit}
                {props.isAvailable ? "Available" : "Not Available"} 
            </li>
        </ul>
    );
}

Food.propTypes = {
    fruit: PropTypes.string,
    isAvailable: PropTypes.bool
}

Food.defaultProps = {
    fruit: "None"
}


export default Food;