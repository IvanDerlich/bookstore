export const createBook = (book, dispatch) => {
  dispatch({
    type: 'ADD_BOOK',
    id: book.id,
    title: book.title,
    category: book.category,
  });
};

export const removeBook = (book, dispatch) => {
  dispatch({
    type: 'REMOVE_BOOK',
    id: book.id,
  });
};
