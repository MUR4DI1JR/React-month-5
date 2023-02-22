const initialState = {
    counter: 10
};

const reducer = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case 'INCREMENT':
            return {...state, counter: state.counter + 1}
        case 'DECREMENT':
            return {...state, counter: state.counter - 1}
        case 'ADD_COUNTER':
            return {...state, counter: state.counter + action.value}
        case 'SUBTRACT':
            return {...state, counter: state.counter - action.value}
        default:
            return state
    }
}

export default reducer;