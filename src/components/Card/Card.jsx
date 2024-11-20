import Food from "../Food/Food";

function Card(){

    return(
        <>
            <div className="card">
                <p>Pick one fruit</p>
            </div>
            <Food/>
        </>

    );
}

export default Card;