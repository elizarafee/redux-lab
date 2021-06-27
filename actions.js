const redux = require('redux');

// creating a constant for a action Buying Cake
const BUY_CAKE = 'BUY_CAKE';

// this function is a action Creator which returns a action
function buyCake() {    // returning a function
    return {    
        type: BUY_CAKE,
        info: 'First redux action'        
    }
}