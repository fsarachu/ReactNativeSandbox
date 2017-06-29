/* @flow */

import React from "react";
import {TabNavigator} from "react-navigation";
import ProfileInfoScreen from "./info";
import ProfilePicturesScreen from "./pictures";

const ProfileScreen = TabNavigator({
    Info: {screen: ProfileInfoScreen},
    Pictures: {screen: ProfilePicturesScreen},
});

ProfileScreen.navigationOptions = ({navigation}) => ({
    title: `${navigation.state.params.name}'s Profile`,
});

export default ProfileScreen;