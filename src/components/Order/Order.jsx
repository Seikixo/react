
import React, {useState} from "react";

function Order(){

    const [order, setOrder] = useState("None");
    const [pieces, setPieces] = useState(0);
    const [submit, setSubmit] = useState(false);

    const updateOrder = () => {
        setOrder("apple");
    }

    const updatePieces = () => {
        const addPieces = pieces +1;
        setPieces(addPieces);
    }

    const updateSubmit = () => {
        setSubmit(!submit);
    }

    return(
        <>
            <p>Name: {order}</p>
            <button onClick={updateOrder}>Set Order</button>

            <p>Pieces: {pieces}</p>
            <button onClick={updatePieces}>Add Pieces</button>

            <p>Submit: {submit ? 'False' : 'True'}</p>
            <button onClick={updateSubmit}>Submit</button>
        </>
    )

}

export default Order;