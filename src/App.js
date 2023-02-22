import React, {Component} from 'react';
import {connect} from "react-redux";
import Counter from "./component/Counter";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <p>counter: {this.props.counter}</p>
                <button className="py-2 px-4 bg-gray-400 text-white mr-2"
                        onClick={this.props.incrementCounter}>increment</button>
                <button className="py-2 px-4 bg-gray-400 text-white mr-2"
                        onClick={this.props.decrementCounter}>decrement</button>
                <button
                    onClick={this.props.increaseByCounter}>increase by 5</button>
                <button
                    onClick={this.props.decreaseByCounter}>decrease by 5</button>
                <h1 className="font-bold uppercase">Function Component Counter</h1>
                <Counter/>
            </div>
        );
    }
}
const mapStateToProps = state =>{
    return{
        counter: state.counter
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        incrementCounter: ()=> dispatch({type: 'INCREMENT'}),
        decrementCounter: ()=> dispatch({type: 'DECREMENT'}),
        increaseByCounter: ()=> dispatch({type: 'ADD_COUNTER', value: 5}),
        decreaseByCounter: ()=> dispatch({type: 'SUBTRACT', value: 5}),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);