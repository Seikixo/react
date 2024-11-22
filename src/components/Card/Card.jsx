import Food from "../Food/Food";

function Card(){

    return(
        //applying module style sheet 
        //using other component in a component
        <>
            <div className="card">
                <p>Pick one fruit</p>
            </div>
            <Food isAvailable={true} isNotAvailable={false}/>
        </>

    );
}

export default Card;