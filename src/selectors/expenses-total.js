// eslint-disable-next-line import/no-anonymous-default-export
export default (expeses) => {
  if (expeses.length === 0) {
    return 0;
  } else {
    return expeses
      .map((expense) => expense.amount)
      .reduce((sum, value) => sum + value, 0);
  }
};
