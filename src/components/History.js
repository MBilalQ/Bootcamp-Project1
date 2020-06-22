import React, { useContext } from "react";
import {GlobalContext} from "../context/Global";
import Transaction from "./Transaction";

function History() {
    const {transactions} = useContext(GlobalContext);
    

    return (
        <div>
            <h4>History</h4>
            <hr />
            <ul className="history-list">
                {transactions.map(transaction => (<Transaction 
                    key = {transaction.id} transaction = {transaction}/>
                ))}
                
                
            </ul>
        </div>

    );
}

export default History;