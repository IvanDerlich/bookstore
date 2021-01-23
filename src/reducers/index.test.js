// import deepFreeze from 'deep-freeze';
// import reducer from './index';
// import randomId from '../helpers/randomId';

describe('Team Reducer Filter', () => {
  // const initialState = {
  //   books: [{
  //     id: randomId(),
  //     title: 'The Little Prince',
  //     completed: false,
  //     category: 'kids',
  //   },
  //   {
  //     id: randomId(),
  //     title: 'The Odisey',
  //     completed: true,
  //     category: 'learning',
  //   },
  //   {
  //     id: randomId(),
  //     title: 'Aesop\'s fables',
  //     completed: false,
  //     category: 'kids',
  //   },
  //   {
  //     id: randomId(),
  //     title: 'Lord of the Rings',
  //     completed: false,
  //     category: 'fiction',
  //   }],
  //   visibilityFilter: 'SHOW_ALL',
  // };

  it("Should filter books that don't have the kids category and then show all", () => {
    // const action = {
    //   type: 'CHANGE_FILTER',
    //   categoryFilter: 'KIDS',
    // };
    // const resultState = {
    //   books: [{
    //     id: randomId(),
    //     title: 'The Little Prince',
    //     completed: false,
    //     category: 'kids',
    //   },
    //   {
    //     id: randomId(),
    //     title: 'Aesop\'s fables',
    //     completed: false,
    //     category: 'kids',
    //   }],
    //   visibilityFilter: 'KIDS',
    // };

    // const result = reducer(initialState, action);
    // console.log(result);
    // expect(result).toEqual(resultState);
  });

  it("Should filter books that don't have the learning category and then show all", () => {

  });
});
