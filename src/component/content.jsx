import React, {Component} from 'react';

class Content extends Component {

    changeColor = () =>{
        this.props.changeColor();
        console.log(this.props.back);
    }

    render() {
        console.log(this.props);
        return (
            <div style={{textAlign: 'center', background: this.props.colorStatus ? this.props.back : '#fff', color: this.props.colorStatus ? '#fff' : '#000'}}>
                <p style={{fontWeight: 'Bold'}}>{this.props.langStatus ? this.props.lang : this.props.refLang}</p>
                <button onClick={this.changeColor} >change color and word</button>
            </div>
        );
    }
}

export default Content;