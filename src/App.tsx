import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {bindActionCreators} from "redux"
import {actionCreators, State} from "./state"




function App() {

  const dispatch = useDispatch();
  const {depositMoney, withdrawtMoney,bankrupt } = bindActionCreators(actionCreators, dispatch)
  const amount = useSelector((state: State) => state.bank)
  console.log(amount)
  return (
    <div className="App">
      <h1>{amount}</h1>
      <button onClick={() => depositMoney(1000)}>Deposit</button>
      <button onClick={() => withdrawtMoney(500)}>Whitdraw</button>
      <button onClick={() => bankrupt()}>Bankrupt</button>
    </div>
  );
}

export default App;
