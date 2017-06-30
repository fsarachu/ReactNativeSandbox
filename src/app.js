import React from "react";
import {StackNavigator} from "react-navigation";
import LoginScreen from "./screens/login";
import ProfileScreen from "./screens/profile";

const App = StackNavigator(
    {
        Home: {screen: LoginScreen},
        Profile: {screen: ProfileScreen},
    },
    {
        headerMode: 'none',
    }
);

export default App;