/* @flow */

import React, {Component} from "react";
import {Alert, Button, View} from "react-native";
import styles from "./styles";
import UserService from "../../../services/user-service";

export default class MyAccountScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'My Account',
    };

    removeAccount() {
        UserService.remove()
            .catch(e => Alert.alert(e));
    }

    render() {
        return (
            <View style={styles.container}>
                <Button title="Remove Account" onPress={this.removeAccount.bind(this)}/>
            </View>
        );
    }
}