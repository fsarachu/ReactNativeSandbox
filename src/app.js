import React from "react";
import {StackNavigator} from "react-navigation";
import SplashScreen from "./screens/splash-screen";
import LoginScreen from "./screens/login-screen";
import ProfileScreen from "./screens/profile-screen";

const AppNavigator = StackNavigator(
    {
        Splash: {screen: SplashScreen},
        Login: {screen: LoginScreen},
        Profile: {screen: ProfileScreen},
    },
    {
        initialRouteName: 'Splash',
        // headerMode: 'none',
    }
);

class App extends React.Component {
    render() {
        return (
            <AppNavigator/>
        );
    }
}

export default App;