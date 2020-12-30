import book from './book'

const initialState = [
  {
    title: "The Little Prince",
    completed: false
  },
  {
    title: "The Odisey",
    completed: true
  }
] 


const books = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_BOOK':
      return [
        ...state,
        book(undefined,action) 
      ]
    case 'TOGGLE_BOOK': 
      return state.map(t => book(t, action))
    default:
      return state;
  }
}

export default books;