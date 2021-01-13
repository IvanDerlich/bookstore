export const CREATE_BOOK = (book, dispatch) => {
  dispatch({
    type: 'ADD_BOOK',
    id: book.id,
    title: book.title,
    category: book.category,
  });
};

export const REMOVE_BOOK = (book, dispatch) => {
  dispatch({
    type: 'REMOVE_BOOK',
    id: book.id,
  });
};

export const CHANGE_FILTER = (category, dispatch) => {
  dispatch({
    type: 'CHANGE_FILTER',
    category,
  });
};
