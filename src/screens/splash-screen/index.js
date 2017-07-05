/* @flow */

import React, {Component} from "react";
import {View} from "react-native";
import {NavigationActions} from "react-navigation";
import UserService from "../../services/user-service";
import Cherry from "../../components/cherry";
import styles from "./styles";

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        UserService.get()
            .then((user) => {
                if (!user) {
                    this.resetNavigator('Login');
                } else {
                    this.resetNavigator('Profile', {user});
                }
            });
    }

    resetNavigator(routeName, params) {
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName, params})
            ]
        });
        this.props.navigation.dispatch(resetAction);
    }

    render() {
        return (
            <View style={styles.container}>
                <Cherry/>
            </View>
        );
    }
}