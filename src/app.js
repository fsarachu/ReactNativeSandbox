import React from "react";
import {StackNavigator} from "react-navigation";
import LoginScreen from "./views/login";

const App = StackNavigator({
    Home: {screen: LoginScreen},
});

export default App;