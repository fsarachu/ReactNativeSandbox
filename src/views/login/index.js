/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./styles";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome!',
    };

    render() {
        return (
            <View style={styles}>
                <Text>Login Screen</Text>
            </View>
        );
    }
}