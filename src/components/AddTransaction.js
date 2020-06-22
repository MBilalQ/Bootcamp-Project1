import React, { useState, useContext } from "react";
import {GlobalContext} from "../context/Global";

function AddTransaction() {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 1000000),
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }
    
    return(
        <div>
            <h4>Add New Transaction</h4>
            <hr/>
            <form onSubmit = {onSubmit} className = "transaction-form">
                <label>
                    Transaction Detail
                    <br/>
                    <input type = "text" value={text} onChange={(e)=> setText (e.target.value)} placeholder = "Enter Text"></input>
                </label>
                <br/>
                <label>
                    Transaction Amount (- for expense)
                    <br/>
                    <input type = "number" value={amount} onChange={(e)=> setAmount (e.target.value)} placeholder = "Enter Amount"></input>
                </label>
                <br/>
                <input type = "submit" value = "Add Transaction" className = "transaction-button"></input>
            </form>
        </div>

    );
}

export default AddTransaction ;
