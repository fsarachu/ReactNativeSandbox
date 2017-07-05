/* @flow */

import React from "react";
import {TabNavigator} from "react-navigation";
import ProfileLocalScreen from "./local";
import ProfileFacebookScreen from "./facebook";

const ProfileScreen = TabNavigator({
    Local: {screen: ProfileLocalScreen},
    Facebook: {screen: ProfileFacebookScreen},
});

ProfileScreen.navigationOptions = ({navigation}) => ({
    title: `Profiles`,
});

export default ProfileScreen;