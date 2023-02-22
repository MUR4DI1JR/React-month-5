import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const Counter = () => {
    const counter = useSelector(state => state.counter);
    const dispatch = useDispatch();

    const increment = () => {
        dispatch({type: 'INCREMENT'})
    }

    const decrement = () => {
        dispatch({type: 'DECREMENT'})
    }

    return (
        <div>
            <p>counter: {counter}</p>
            <button className="py-4 px-2 bg-gray-400 uppercase rounded-2xl text-white mr-2" onClick={increment}>increment</button>
            <button className="py-4 px-2 bg-gray-400 uppercase rounded-2xl text-white " onClick={decrement}>decrement</button>
        </div>
    );
};

export default Counter;