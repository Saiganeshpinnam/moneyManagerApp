// Write your code here
import './index.css'

const transactionList = props => {
  const {eachTransaction, onDeleteTransactionItem} = props
  const {title, amount, type, id} = eachTransaction

  const onDeleteItem = () => {
    onDeleteTransactionItem(id)
  }
  return (
    <li className="each-transaction-details-container">
      <p>{title}</p>
      <p>{amount}</p>
      <p>{type}</p>

      <button type="button" onClick={onDeleteItem} data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
        />
      </button>
    </li>
  )
}
export default transactionList
