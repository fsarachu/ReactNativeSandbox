/* @flow */

import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import styles from "./styles";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome!',
    };

    render() {
        const { navigate } = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text>Login Screen</Text>
                <Button
                    title='My Profile'
                    onPress={() => navigate('Profile', {name: 'Franco' })}
                />
            </View>
        );
    }
}