import React from "react";
import {StackNavigator} from "react-navigation";
import LoginScreen from "./screens/login-screen";
import ProfileScreen from "./screens/profile-screen";

const App = StackNavigator(
    {
        Login: {screen: LoginScreen},
        Profile: {screen: ProfileScreen},
    },
    {
        headerMode: 'none',
    }
);

export default App;