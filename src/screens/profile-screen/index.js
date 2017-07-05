/* @flow */

import React from "react";
import {TabNavigator} from "react-navigation";
import ProfileInfoScreen from "./info";

const ProfileScreen = TabNavigator({
    Info: {screen: ProfileInfoScreen},
});

ProfileScreen.navigationOptions = ({navigation}) => ({
    title: `Profiles`,
});

export default ProfileScreen;