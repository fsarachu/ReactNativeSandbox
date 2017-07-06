/* @flow */

import React from "react";
import {TabNavigator} from "react-navigation";
import ProfileLocalScreen from "./local";
import ProfileFacebookScreen from "./facebook";
import MyAccountScreen from "./my-account";

const ProfileNavigator = TabNavigator({
    Local: {screen: ProfileLocalScreen},
    Facebook: {screen: ProfileFacebookScreen},
    MyAccount: {screen: MyAccountScreen},
});

ProfileNavigator.navigationOptions = ({navigation}) => ({
    title: `Profile Screen`,
});

export default class ProfileScreen extends React.Component {

    constructor(props) {
        super(props);
        this.screenProps = {
            user: this.props.navigation.state.params.user,
        };
    }

    render() {
        return (
            <ProfileNavigator screenProps={this.screenProps}/>
        );
    }
}