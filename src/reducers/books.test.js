import deepFreeze from 'deep-freeze';
import booksReducer from './books';

/* Please try to optimize this code using the before each function
 described in the jest documentation */

describe('Team Reducer', () => {
  it('Should return the initial state with undefined state', () => {
    const initialState = undefined;
    // deepFreeze(initialState); cannot freeze undefinded variables
    const action = {};
    deepFreeze(action);
    const resultState = [];

    const result = booksReducer(initialState, action);
    // console.log(result);
    expect(result).toEqual(resultState);
  });

  it('Should return the initial state with [] state', () => {
    const initialState = [];
    deepFreeze(initialState);
    const action = {};
    deepFreeze(action);
    const resultState = [];

    const result = booksReducer(initialState, action);
    // console.log(result);
    expect(result).toEqual(resultState);
  });

  it('Should add one book', () => {
    const initialState = [];
    deepFreeze(initialState);
    const resultState = [{
      id: 523,
      title: 'Aesop\'s fables',
      completed: false,
      category: 'kids',
    }];
    const action = {
      type: 'ADD_BOOK',
      id: resultState[0].id,
      title: resultState[0].title,
      category: resultState[0].category,
    };
    deepFreeze(action);

    const result = booksReducer(initialState, action);
    // console.log(result);
    // console.log(resultState);
    expect(result).toEqual(resultState);
  });

  it('Should add one book with completed field set to true', () => {
    // To do in the future
  });

  it('Should delete One book', () => {
    const initialState = [{
      id: 523,
      title: 'Aesop\'s fables',
      completed: false,
      category: 'fiction',
    },
    {
      id: 526,
      title: 'Lord of the Rings',
      completed: false,
      category: 'fiction',
    }];
    deepFreeze(initialState);
    const action = {
      type: 'REMOVE_BOOK',
      id: 526,
    };
    deepFreeze(action);
    const expected = [{
      id: 523,
      title: 'Aesop\'s fables',
      completed: false,
      category: 'fiction',
    }];

    const result = booksReducer(initialState, action);
    // console.log(result);
    // console.log(resultState);
    expect(result).toEqual(expected);
  });

  it('Should edit One book', () => {

  });
});
