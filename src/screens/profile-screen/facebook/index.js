/* @flow */

import React, {Component} from "react";
import {AccessToken, GraphRequest, GraphRequestManager, LoginButton} from "react-native-fbsdk";
import JSONTree from "react-native-json-tree";
import {Alert, Text, View} from "react-native";
import styles from "./styles";
import UserService from "../../../services/user-service";

export default class ProfileFacebookScreen extends Component {

    static navigationOptions = {
        tabBarLabel: 'Facebook Profile',
    };

    constructor(props) {
        super(props);
        this.state = {
            user: this.props.screenProps.user,
        };
    }

    onLogout() {
        UserService.get()
            .then((user) => {
                user.facebook.token = null;
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
            this.getAccessToken()
                .then(this.storeAccessToken.bind(this))
                .then(this.getUserData.bind(this))
                .then(this.storeUserData.bind(this))
                .catch((e) => Alert.alert(e));
        }
    }

    getAccessToken() {
        return AccessToken.getCurrentAccessToken()
            .then((data) => data.accessToken);
    }

    storeAccessToken(accessToken) {
        return UserService.get()
            .then((user) => {
                user.facebook.token = accessToken;
                return UserService.save(user);
            })
            .then((user) => {
                return new Promise((resolve) => {
                    this.setState(
                        (prev) => ({user}),
                        () => resolve()
                    );
                });
            })
            .catch((e) => Alert.alert(e));
    }

    getUserData() {
        // https://stackoverflow.com/questions/37383888/how-to-use-graph-api-with-react-native-fbsdk
        return new Promise((resolve, reject) => {

            const responseInfoCallback = (error, result) => {
                if (error) {
                    reject(`Error fetching user data: ${error}`);
                } else {
                    resolve(result);
                }
            };

            const infoRequest = new GraphRequest(
                '/me',
                {
                    accessToken: this.state.user.facebook.token,
                    parameters: {
                        fields: {
                            string: 'email,name,first_name,middle_name,last_name,picture'
                        }
                    }
                },
                responseInfoCallback
            );

            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
        });
    }

    storeUserData(info) {
        return UserService.get()
            .then((user) => {
                user.facebook.data = info;
                return UserService.save(user);
            })
            .then((user) => {
                this.setState((prev) => ({user}));
            });
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