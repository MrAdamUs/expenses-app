import { removeExpense, editExpense, addExpense } from '../../actions/expenses';

// RemoveExpens
test('Should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

// Edit Expense
test('Should setup edit expense action object', () => {
  const action = editExpense('123', { note: 'test Update' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { note: 'test Update' },
  });
});

// Add expense

test('Should setup add expense action object', () => {
  const expenseDate = {
    description: 'Rent',
    amount: 1000,
    createdAt: 1000,
    note: 'This was last month',
  };
  const action = addExpense(expenseDate);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseDate,
      id: expect.any(String),
    },
  });
});

test('Should setup add expense action object with default values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note: '',
    },
  });
});
