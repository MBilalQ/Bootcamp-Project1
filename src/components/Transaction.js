import React, { useContext } from "react";
import {GlobalContext} from "../context/Global";

function Transaction({ transaction }) {
    const {deleteTransaction} = useContext(GlobalContext);
    const sign = transaction.amount > 0 ? "+" : "-";
    return (
        <div className = "history-list">
        <li className = {transaction.amount > 0 ? "plus" : "minus"}>
            {transaction.text}<span>
                {sign}$ {Math.abs(transaction.amount)} </span> <button
                onClick = {()=> deleteTransaction(transaction.id)}>x</button>
        </li>
        </div>
    );
}

export default Transaction;

//<div className={` ${isMorning ? 'dayLight' : 'nightLight'}`}></div>