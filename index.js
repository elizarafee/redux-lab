const redux = require('redux');
const createStore = redux.createStore;


// a state to tract of the cakes
const initialState = {
    numOfCakes: 10
}

// creating a constant for a action Buying Cake
const BUY_CAKE = 'BUY_CAKE';

// this function is a action Creator which returns a action
function buyCake() {    // returning a function
    return {    
        type: BUY_CAKE,
        info: 'First redux action'        
    }
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

// subscribe(listener) Adds a change listener. It will be called any time an action is dispatched, and some part of the state tree may potentially have changed.
const unsubscribe = store.subscribe(() => 
    console.log('updated state: ', store.getState())
)
// Dispatch is an action. This is the only way to trigger a state change. with dispatch the subscribe(listener) will be called everytime automatically
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())