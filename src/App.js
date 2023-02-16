import React from 'react';
import Loader from "./component/Loader/Loader";
import Content from "./component/content";
import HelloWorld from "./component/helloWorld";
import WindowSize from "./component/windowSize";
import WithWindowSize from "./component/window/window";

const App = () => {
    const ContentComponent = Loader(Content, 3000, '#898790', 'French');
    const HelloWorldComponent = Loader(HelloWorld, 1000, '#999', 'German');

    const WindowShowComponent = WithWindowSize(WindowSize);

    return (
        <div>
            <ContentComponent/>
            <HelloWorldComponent/>
            <WindowShowComponent/>
        </div>
    );
};

export default App;