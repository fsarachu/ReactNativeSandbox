/* @flow */

import React from "react";
import {TabNavigator} from "react-navigation";
import ProfileLocalScreen from "./local";

const ProfileScreen = TabNavigator({
    Local: {screen: ProfileLocalScreen},
});

ProfileScreen.navigationOptions = ({navigation}) => ({
    title: `Profiles`,
});

export default ProfileScreen;