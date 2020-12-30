const book = (bookState, action) => {
  switch (action.type){
    case 'ADD_BOOK':
      return {
        id: action.id,
        title: action.title,
        completed: false,
      }
    case 'TOGGLE_BOOK':
      if( bookState.id !== action.id){
        return bookState;
      }
      return {
        ...bookState,
        completed: !bookState.completed
      }
    default:
      return bookState 
  }
}

export default book;