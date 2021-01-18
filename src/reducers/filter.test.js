import deepFreeze from 'deep-freeze';
import filter from './filter';

describe('Team Reducer Filter', () => {
  it("Should change the filter from 'ALL' to 'KIDS' and then to 'ALL' again'", () => {
    const initialState = undefined;
    // deepFreeze(initialState); cannot freeze undefined variables
    const action = {
      type: 'CHANGE_FILTER',
      categoryFilter: 'KIDS',
    };
    deepFreeze(action);
    const resultState = 'KIDS';

    let result = filter(initialState, action);
    // console.log(result, "Result: ");
    expect(result).toEqual(resultState);
    result = filter(result, {
      type: 'CHANGE_FILTER',
      categoryFilter: 'ALL',
    });
    deepFreeze(result);
    expect(result).toEqual('ALL');
  });
});
