import menuReducer from '../reducer';

describe('menuReducer', () => {
  it('returns the initial state', () => {
    expect(menuReducer(undefined, {})).toEqual(menuReducer(undefined, {}));
  });
});
