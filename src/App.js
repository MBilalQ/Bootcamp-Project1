import React from 'react';
import './App.css';
import Heading from "./components/Heading";
import Balance from "./components/Balance";
import Expense from "./components/Expense";
import History from "./components/History";
import AddTransaction from "./components/AddTransaction";
import {GlobalProvider} from "./context/Global";

function App() {
  return (
    <GlobalProvider>
      <div className="header">
        <Heading />
        <Balance />
        <Expense />
        <History />
        <AddTransaction />

      </div>
    </GlobalProvider>
  );
}

export default App;
