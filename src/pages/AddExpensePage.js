import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from '../components/ExpenseForm';
import { startAddExpense } from '../actions/expenses';

const AddExpensePage = (props) => {
  return (
    <div>
      <h1>AddExpensePage</h1>
      <ExpenseForm
        onSubmit={(expense) => {
          props.dispatch(startAddExpense(expense));
          props.history.push('/');
        }}
      />
    </div>
  );
};

// const mapDispatchToProps = (dispatch) => ({
//   startAddExpense: (expense) => dispatch(startAddExpense(expense)),
// });

export default connect()(AddExpensePage);
