import React from 'react';
import ExpenseList from '../components/ExpenseList';
import ExpenseListFilters from '../components/ExpenseListFilters';
import ExpensesSummary from '../components/ExpensesSummary';

const ExpenesDashboardPage = () => {
  return (
    <div>
      <p>This is from my dashboard compoent</p>
      <ExpensesSummary />
      <ExpenseListFilters />
      <ExpenseList />
    </div>
  );
};

export default ExpenesDashboardPage;
