import book from './book';

const initialState = [
  {
    id: 1,
    title: 'The Little Prince',
    completed: false,
    category: 'fiction',
  },
  {
    id: 2,
    title: 'The Odisey',
    completed: true,
    category: 'fiction',
  },
];

const books = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return [
        ...state,
        book(undefined, action),
      ];
    case 'TOGGLE_COMPLETED':
      return state.map(book => book(book, action));
    case 'REMOVE_BOOK':
      // remove an element from an array
      return {};
    case 'EDIT_CATEGORY':
      return {};
    case 'EDIT_TITLE':
      return {};
    default:
      return state;
  }
};

export default books;
