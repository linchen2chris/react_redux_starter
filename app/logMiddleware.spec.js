import logMiddleware from './logMiddleware';
import { expect } from 'chai';

const createFakeStore = fakeData => ({
  getState() {
    return fakeData;
  }
});

const dispatchWithStoreOf = (storeData, action) => {
  let dispatched = null;
  const dispatch = logMiddleware(createFakeStore(storeData))(actionAttempt => dispatched = actionAttempt);
  dispatch(action);
  return dispatched;
};

describe('middleware', () => {
  it.only('should dispatch if store is empty', () => {
    const action = {
      type: 'ADD',
      id: 1,
      text: 'sdfdff'
    };
    expect(
      dispatchWithStoreOf({}, action)
    ).to.be.equal(action);
  });

  it('should not dispatch if store already has type', () => {
    const action = {
      type: 'ADD'
    };
    expect(
      dispatchWithStoreOf({
       ADD: 'dispatched'
      }, action)
    ).toNotExist()
  })
})
