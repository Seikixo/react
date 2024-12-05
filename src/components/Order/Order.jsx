
import React, {useState} from "react";

function Order(){

    const [order, setOrder] = useState("None");
    const [pieces, setPieces] = useState(0);
    const [submit, setSubmit] = useState(false);
    const [payment, setPayment] = useState();

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

    function handlePayment(event){
        setPayment(event.target.value);
    }

    return(
        <>
            <p>Name: {order}</p>
            <button onClick={updateOrder}>Set Order</button>

            <p>Pieces: {pieces}</p>
            <button onClick={updatePieces}>Add Pieces</button>

            <p>Payment Type: {payment}</p>
            <select value={payment} onChange={handlePayment}>
                <option value="">Select Option</option>
                <option value="Visa">Visa</option>
                <option value="MasterCard">MasterCard</option>
                <option value="GiftCard">GiftCard</option>
            </select>

            <p>Submit: {submit ? 'False' : 'True'}</p>
            <button onClick={updateSubmit}>Submit</button>
        </>
    )

}

export default Order;