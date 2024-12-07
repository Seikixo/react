
import React, {useState, useEffect, useRef} from "react";


function Order(){

    const [order, setOrder] = useState("None");
    const [pieces, setPieces] = useState(0);
    const [color, setColor] = useState("green");
    const [submit, setSubmit] = useState(false);
    const [payment, setPayment] = useState();

    const updateOrder = () => {
        setOrder("apple");
    }

    useEffect(() => {
        document.title = `Pieces: ${pieces}, ${color}`
    }, [pieces, color]);

    function updateColor(){
        setColor(c => c === "green" ? "red" : "green");
    }

    function addPieces(){
        setPieces(p => p + 1);
    }

    function subtractPieces(){
        setPieces(p => p - 1);
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

            <p style={{color: color}}>Pieces: {pieces}</p>
            <button onClick={addPieces}>Add Pieces</button>
            <button onClick={subtractPieces}>Subtract Pieces</button>
            <button onClick={updateColor}>Update Color</button>

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