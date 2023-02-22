import React, {Component} from 'react';
import {connect} from "react-redux";

class App extends Component {
    render() {
        return (
            <div className="text-center">
                <p>counter: {this.props.counter}</p>
                <button className="py-2 px-4 bg-gray-400 text-white mr-2"
                        onClick={this.props.incrementCounter}>increment</button>
                <button className="py-2 px-4 bg-gray-400 text-white mr-2"
                        onClick={this.props.decrementCounter}>decrement</button>
                <button>increase by 5</button>
                <button>decrease by 5</button>
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
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);