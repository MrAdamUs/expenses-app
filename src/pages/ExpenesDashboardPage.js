import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';

const ExpenesDashboardPage = () => {
  return (
    <div>
      <p>This is from my dashboard compoent</p>
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenesDashboardPage;
