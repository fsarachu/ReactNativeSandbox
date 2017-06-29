import React from "react";
import {StackNavigator} from "react-navigation";
import LoginScreen from "./views/login";
import ProfileScreen from "./views/profile";

const App = StackNavigator({
    Home: {screen: LoginScreen},
    Profile: { screen: ProfileScreen },
});

export default App;