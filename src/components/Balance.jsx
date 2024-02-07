import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

  const { transaction } = useContext(GlobalContext);

  // my code - logic
  // let totalBalance = 0;

  // transaction.forEach((transaction) => {
  //   totalBalance += transaction.amount;
  //   totalBalance
  // })

  // Logic

  const amounts = transaction.map(transaction => transaction.amount)
  const total = amounts.reduce((acc, item) => acc += item).toFixed(2)

  return (
    <div className='container'>
        <h4>Your Balance</h4>
        <h1 id="balance">${ total }</h1>
    </div>
  )
}

export default Balance;
