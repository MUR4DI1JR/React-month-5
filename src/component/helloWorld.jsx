import React, {Component} from 'react';

class HelloWorld extends Component {
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <p>{this.props.lang}</p>
                <button onClick={this.props.changeColor} >change color and word</button>
            </div>
        );
    }
}

export default HelloWorld;