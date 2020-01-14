const redux = require('redux');

const initialState = {
  counter: 0
};

const rootReducer = (state = initialState, action) => {
  // if (action.type === 'INC_COUNTER') {
  //   return {...state, counter: state.counter + 1};
  // }
  // if (action.type === 'ADD_COUNTER') {
  //   return {...state, counter: state.counter + action.value};
  // }
  // return state;
  switch(action.type) {
    case "INC_COUNTER":
      return {...state, counter: state.counter + 1};

      case "ADD_COUNTER":
        return {...state, counter: state.counter + action.value};

      default: 
        return state;
  }
};

const store = redux.createStore(rootReducer);

store.subscribe(() => {
  console.log('[Subscription]: ', store.getState());
});

console.log('before:', store.getState());

store.dispatch({type: 'INC_COUNTER'});
store.dispatch({type: 'ADD_COUNTER', value: 10});

console.log('after:', store.getState());

console.log(store.getState());