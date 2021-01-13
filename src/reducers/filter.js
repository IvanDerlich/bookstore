const filter = (
  state = 'all',
  action,
) => {
  switch (action.type) {
    case 'CHANGE_FILTER':
      return action.categoryFilter;
    default:
      return state;
  }
};

export default filter;
