import './App.css';
import { useEffect, useState } from "react";
import Transactions from "./components/Transactions/Transactions";

function App() {

  const [transactions, setTransactions] = useState([]);

  useEffect(()=> {
    fetch("http://localhost:3000/data/data.json")
      .then(res => res.json())
      .then((data) => setTransactions(data.transactions));
  }, []);

  return (
    <div className="App">
      <Transactions transactions={transactions}/>
    </div>
  );
}

export default App;
