import React, { Component } from 'react';

export default class ExpenseForm extends Component {
  state = {
    description: '',
    note: '',
    amount: '',
  };
  onDescreiptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };

  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

  onAmountChange = (e) => {
    const amount = e.target.value;
    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };

  render() {
    return (
      <div>
        <h1>Expense Form</h1>
        <div>
          <form>
            <input
              type='text'
              placeholder='Description'
              autoFocus
              value={this.state.description}
              onChange={this.onDescreiptionChange}
            />
            <input
              type='text'
              placeholder='Amount'
              value={this.state.amount}
              onChange={this.onAmountChange}
            />
            <textarea
              placeholder='Add a note for you expense'
              onChange={this.onNoteChange}
              value={this.state.note}
            ></textarea>
            <button>Add Expense</button>
          </form>
        </div>
      </div>
    );
  }
}
