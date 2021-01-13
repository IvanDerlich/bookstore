import book from './book';

const books = (state = [], action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        book(undefined, action),
      ];
    case 'TOGGLE_COMPLETED':
      return state.map(book => book(book, action));
    case 'REMOVE_BOOK':
      return state.filter(book => book.id !== action.id);
    case 'EDIT_CATEGORY':
      return {};
    case 'EDIT_TITLE':
      return {};
    default:
      return state;
  }
};

export default books;
