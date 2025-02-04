// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {getIncome, getExpenses} = props

  // const income = transactionsList
  //   .filter(transaction => transaction.type === 'Income')
  //   .reduce((acc, curr) => acc + parseInt(curr.amount), 0)
  // const expenses = transactionsList
  //   .filter(transaction => transaction.type === 'Expenses')
  //   .reduce((acc, curr) => acc + parseInt(curr.amount), 0)

  const balance = getIncome - getExpenses

  return (
    <div className="money-details-bg-container">
      <div className="money-details-container balance-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          className="financial-icon"
          alt="balance"
        />
        <div className="current-status-container">
          <p className="your-status">Your Balance</p>
          <p className="amount-status" data-testid="balanceAmount">
            Rs. {balance}
          </p>
        </div>
      </div>

      <div className="money-details-container income-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          className="financial-icon"
          alt="income"
        />
        <div className="current-status-container">
          <p className="your-status">Your Income</p>
          <p className="amount-status" data-testid="incomeAmount">
            Rs. {getIncome}
          </p>
        </div>
      </div>

      <div className="money-details-container expenses-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          className="financial-icon"
          alt="expenses"
        />
        <div className="current-status-container">
          <p className="your-status">Your Expenses</p>
          <p className="amount-status" data-testid="expensesAmount">
            Rs. {getExpenses}
          </p>
        </div>
      </div>
    </div>
  )
}
export default MoneyDetails
