const book = (bookState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        // Improve this by autogenerating an ID
        id: action.id,
        title: action.title,
        completed: false,
        category: action.category,
      };
    case 'TOGGLE_COMPLETED':
      if (bookState.id !== action.id) {
        return bookState;
      }
      return {
        ...bookState,
        completed: !bookState.completed,
      };
    default:
      return bookState;
  }
};

export default book;
