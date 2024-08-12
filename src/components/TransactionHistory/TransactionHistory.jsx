import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ transactions }) {
  return (
    <table className={css.table}>
      <thead>
        <tr className={css.mainText}>
          <th className={css.tableHeader}>Amount</th>
          <th className={css.tableHeader}>Currency</th>
          <th className={css.tableHeader}>Type</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id}>
              <td className={css.text}>{type}</td>
              <td className={css.text}>{amount}</td>
              <td className={css.text}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
// {
//     "id": "1e0700a2-5183-4291-85cc-2065a036a683",
//     "type": "invoice",
//     "amount": "964.82",
//     "currency": "LRD"
//   }
