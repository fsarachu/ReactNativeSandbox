/* @flow */

import React, {Component} from "react";
import {LoginButton} from "react-native-fbsdk";
import JSONTree from "react-native-json-tree";
import {Alert, Text, View} from "react-native";
import styles from "./styles";
import UserService from "../../../services/user-service";

export default class ProfileFacebookScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.screenProps.user,
        };
    }

    onLogout() {
        UserService.get()
            .then((user) => {
                user.facebook = null;
                return UserService.save(user);
            })
            .then((user) => {
                this.setState((prev) => ({user}));
            })
            .catch((e) => Alert.alert(e));
    }

    onLogin(error, result) {
        if (error) {
            Alert.alert("Login failed with error: " + result.error);
        } else if (result.isCancelled) {
            Alert.alert("Login was cancelled");
        } else {
            UserService.get()
                .then((user) => {
                    user.facebook = result;
                    return UserService.save(user);
                })
                .then((user) => {
                    this.setState((prev) => ({user}));
                })
                .catch((e) => Alert.alert(e));
        }
    }

    render() {
        return (
            <View style={styles.container}>

                <Text>Facebook profile</Text>

                <LoginButton
                    readPermissions={['public_profile', 'email']}
                    onLoginFinished={this.onLogin.bind(this)}
                    onLogoutFinished={this.onLogout.bind(this)}
                />

                {this.state.user && this.state.user.facebook ? (
                    <JSONTree data={this.state.user.facebook}/>
                ) : (
                    null
                )}

            </View>
        );
    }
}