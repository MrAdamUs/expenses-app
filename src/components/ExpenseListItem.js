import React from 'react';

const ExpenseListItem = ({ items }) => {
  return (
    <>
      {items.map((item) => (
        <div key={item.id}>
          <h3>{item.description}</h3>
          <p>
            {item.amount} - {item.createdAt}
          </p>
        </div>
      ))}
    </>
  );
};

export default ExpenseListItem;
