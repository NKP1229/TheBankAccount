import "./transactionHistory.scss";
import { useSelector } from "react-redux";

/** Displays a table row with transaction information  */
const TransactionRow = ({ transaction: { type, amount, balance } }) => (
  <tr>
    <th scope="row">{type}</th>
    <td>{amount.toFixed(2)}</td>
    <td>{balance.toFixed(2)}</td>
  </tr>
);

/** Displays a table of the user's transaction history. */
export default function TransactionHistory() {
  // TODO: Get the transaction history from the Redux store using the useSelector hook
  //const history = [];
  const history = useSelector((state) => state.transactions.history);
  return (
    <section className="transactions-history container">
      <h2>Transaction History</h2>
      <table>
        <thead>
          <tr>
            <th scope="col">Type</th>
            <th scope="col">Amount</th>
            <th scope="col">Balance</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO
          Map over the transactions in `history`
          to render the appropriate `TransactionRow`s
          */}
          {history && history.length > 0 ? (
            history.map((transaction, index) => (
              <TransactionRow key={index} transaction={transaction}/>
            ))
          ) : (
            <tr>
              <td colSpan="3">No transactions yet</td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
}
