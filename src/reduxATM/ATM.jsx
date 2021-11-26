import { connect } from "react-redux";
import { deposit, withdraw } from "./actions";

const ATM = () => {
  const handleDeposit = () => {
    deposit(10);
  };

  const handleWithdraw = () => {
    withdraw(10);
  };

  return (
    <div className="ATM">
      <h1>Redux ATM</h1>
      <p>{value}</p>

      <button style={{ background: "green" }} onClick={handleDeposit}>
        Deposit $10
      </button>
      <button style={{ background: "red" }} onClick={handleWithdraw}>
        Withdraw $10
      </button>
    </div>
  );
};

export default connect(
  (state) => ({
    value: state.atm.value,
  }),
  { deposit, withdraw }
)(ATM);

export { ATM };
