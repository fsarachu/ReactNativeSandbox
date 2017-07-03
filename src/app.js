import React from "react";
import {Provider} from 'react-redux';
import store from './store/store';
import CounterContainer from "./containers/CounterContainer";

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <CounterContainer/>
            </Provider>
        );
    }
}

export default App;