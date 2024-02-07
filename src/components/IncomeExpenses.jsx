import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {

  const { transaction } = useContext(GlobalContext);
  
  // mylogic

  // let expense = 0;
  // let income = 0;

  // transaction.forEach((transaction) => {
  //   if(transaction.amount < 0) {
  //     expense += transaction.amount;
  //   }
  //   else {
  //     income += transaction.amount;
  //   }
  // })


  // logic

  const amounts = transaction.map(transaction => transaction.amount);

  const income = amounts
    .filter(item => item > 0)
    .reduce((acc, item) => (acc += item))
    .toFixed(2);

  const expense = amounts
    .filter(item => item < 0)
    .reduce((acc, item) => (acc += item))
    .toFixed(2);

  return (
    <div className='inc-exp-container'>
        <div>
            <h4>Income</h4>
            <p id="money-plus" className="money plus">{income}</p>
        </div>
        <div>
            <h4>Expense</h4>
            <p id="money-minus" className="money minus"> {expense}</p>
        </div>
    </div>
  )
}

export default IncomeExpenses;
