const redux = require('redux');
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;


// states to tract of the cakes and icecreams
const cakeState = {
numOfCakes: 10
}
const iceCreamState = {
numOfIceCreams: 20
}

// creating a constant for a action Buying cakes AND icecreams
const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';

// this function is a action Creator which returns a action
function buyCake() {    // returning a function
    return {    
        type: BUY_CAKE,
        info: 'First redux action'        
    }
}

function buyIceCream() {
    return {    
        type: BUY_ICECREAM, 
    }
}

// reducer accepts two arguments: 1st one is a state and the second one is the action
// a reducer for cake
const cakeReducer = (state = cakeState, action) => {
    switch(action.type) {
        case BUY_CAKE: return {
            ...state, numOfCakes: state.numOfCakes - 1
        }
        default: return state
    }
}

// a reducer for icecream
const iceCreamReducer = (state = iceCreamState, action) => {
    switch(action.type) {
        case BUY_ICECREAM: return {
            ...state, numOfIceCreams: state.numOfIceCreams - 1
        }
        default: return state
    }
}

// combineReducers
const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

// createStore accepts the reducer
const store = createStore(rootReducer);

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
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())