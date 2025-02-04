import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'

import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
const initialTransactionsList = []

class MoneyManager extends Component {
  state = {
    transactionList: initialTransactionsList,
    title: '',
    amount: '',
    type: 'Income',
  }

  onSubmitTransaction = event => {
    event.preventDefault()
  }

  onAddTransaction = () => {
    const {title, amount, type} = this.state
    const newTransaction = {
      id: uuidv4(),
      title,
      amount,
      type,
    }

    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      title: '',
      amount: '',
      type: 'INCOME',
    }))
  }

  onChangeTitle = event => {
    this.setState({
      title: event.target.value,
    })
  }

  onChangeAmount = event => {
    this.setState({
      amount: event.target.value,
    })
  }

  onSelectType = event => {
    this.setState({
      type: event.target.value,
    })
  }

  onDeleteTransactionItem = id => {
    this.setState(prevState => ({
      transactionList: prevState.transactionList.filter(
        eachTransaction => eachTransaction.id !== id,
      ),
    }))
  }

  income = () => {
    const {transactionList} = this.state
    let incomeAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += eachTransaction.amount
      }
    })
    return incomeAmount
  }

  expenses = () => {
    const {transactionList} = this.state
    let expensesAmount = 0
    transactionList.forEach(eachTransaction => {
      if (eachTransaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += eachTransaction.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {transactionList} = this.state
    const getIncome = this.income()
    const getExpenses = this.expenses()
    return (
      <div className="bg-container">
        <div className="money-manager-card-container">
          <h1 className="account-holder-name">Hi, Richard</h1>
          <p className="greetings">
            Welcome back to your{' '}
            <span className="money-manager">Money Manager</span>
          </p>
        </div>

        <MoneyDetails getIncome={getIncome} getExpenses={getExpenses} />

        <div className="add-transaction-container">
          <h1 className="add-transaction-heading">Add Transaction</h1>
          <form onSubmit={this.onSubmitTransaction}>
            <div className="input-element-container">
              <label htmlFor="title">TITLE</label>
              <input
                type="text"
                className="form-control inputElement"
                id="title"
                placeholder="TITLE"
                onChange={this.onChangeTitle}
              />
            </div>

            <div className="input-element-container">
              <label htmlFor="amount">AMOUNT</label>
              <input
                type="text"
                className="form-control inputElement"
                id="amount"
                placeholder="AMOUNT"
                onChange={this.onChangeAmount}
              />
            </div>

            <div className="input-element-container">
              <label htmlFor="type">TYPE</label>
              <select
                id="type"
                className="form-control inputElement"
                onChange={this.onSelectType}
              >
                <option>{transactionTypeOptions[0].displayText}</option>
                <option>{transactionTypeOptions[1].displayText}</option>
              </select>
            </div>
            <button
              type="submit"
              className="add-btn"
              onClick={this.onAddTransaction}
            >
              Add
            </button>
          </form>
        </div>

        <ul className="history-table">
          <h1>History</h1>
          <li className="table-header">
            <p>Title</p>
            <p>Amount</p>
            <p>Type</p>
          </li>
          {transactionList.map(eachTransaction => (
            <TransactionItem
              key={eachTransaction.id}
              eachTransaction={eachTransaction}
              onDeleteTransactionItem={this.onDeleteTransactionItem}
            />
          ))}
        </ul>
      </div>
    )
  }
}
export default MoneyManager
