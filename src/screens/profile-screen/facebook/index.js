/* @flow */

import React, {Component} from "react";
import {LoginButton, } from "react-native-fbsdk";
import JSONTree from "react-native-json-tree";
import {Alert, Text, View} from "react-native";
import styles from "./styles";
import UserService from "../../../services/user-service";

export default class ProfileFacebookScreen extends Component {
    render() {
        const user = this.props.screenProps.user;
        const userData = user.facebook;
        const fbButton = (
            <LoginButton
                readPermissions={['public_profile', 'email']}
                onLoginFinished={
                    (error, result) => {
                        if (error) {
                            Alert.alert("Login failed with error: " + result.error);
                        } else if (result.isCancelled) {
                            Alert.alert("Login was cancelled");
                        } else {
                            user.facebook = result;
                            UserService.save(user);
                        }
                    }
                }
                onLogoutFinished={() => Alert.alert("User logged out")}/>
        );

        if (!userData) {
            return (
                <View style={styles.container}>
                    <Text>Facebook profile</Text>
                    {fbButton}
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text>Facebook profile</Text>
                    {fbButton}
                    <JSONTree data={userData}/>
                </View>
            );
        }
    }
}