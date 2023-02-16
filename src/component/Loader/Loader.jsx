import React, {Component} from 'react';

const Loader = (WrapperComponent, timer, back, language) => {
    return class extends Component{
        constructor(props) {
            super(props);
            this.state = {
                loading: true,
                color: true,
                language: 'Russian',
                languageStatus: true,
            }
        }

        componentDidMount() {
            setTimeout(() => {
                this.setState({loading: false})
            }, timer)
        }

        changeColor = () => {
            this.setState({color: !this.state.color, language, languageStatus: !this.state.languageStatus});
        }

        render() {
            return this.state.loading ?
                <div>Loading...</div>
                :
                <WrapperComponent
                    back={back}
                    langStatus={this.state.languageStatus}
                    lang={this.state.language}
                    colorStatus={this.state.color}
                    changeColor={this.changeColor}
                    refLang={language}
                />
        }

    }
};

export default Loader;