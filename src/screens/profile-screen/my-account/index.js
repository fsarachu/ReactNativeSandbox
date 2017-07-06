/* @flow */

import React, {Component} from "react";
import {Button, View} from "react-native";
import styles from "./styles";
import UserService from "../../../services/user-service";

export default class MyAccountScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'My Account',
    };

    removeAccount() {
        UserService.remove()
            .then(() => {
                this.props.navigation.navigate('Splash');
            });
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Remove Account" onPress={this.removeAccount.bind(this)}/>
            </View>
        );
    }
}