/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome!',
    };

    render() {
        return (
            <View>
                <Text>Login Screen</Text>
            </View>
        );
    }
}