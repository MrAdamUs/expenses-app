import React from 'react';

const EditExpensePage = (props) => {
  console.log(props.match.params.id);
  return (
    <div>
      <h1>EditExpensePage</h1>
      <p>{props.match.params.id}</p>
    </div>
  );
};

export default EditExpensePage;
