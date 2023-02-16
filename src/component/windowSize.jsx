import React, {Component} from 'react';

class WindowSize extends Component {
    render() {
        return (
            <div>
                Window Size: {this.props.windowSize.width} x {this.props.windowSize.height}
            </div>
        );
    }
}

export default WindowSize;