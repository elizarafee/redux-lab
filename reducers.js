const BUY_CAKE = require('./actions')
const redux = require('redux');
const createStore = redux.createStore;

// a state to tract of the cakes
const initialState = {
    numOfCakes: 10
}

// a reducer
// reducer accepts two arguments: 1st one is a state and the second one is the action
const reducer = (state = initialState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// createStore accepts the reducer
const store = createStore(reducer);

// we can get the current state by getState()
console.log('Initial State: ', store.getState())