/* @flow */

import React, {Component} from "react";
import {View} from "react-native";
import {NavigationActions} from "react-navigation";
import Cherry from "../../components/cherry";
import styles from "./styles";

export default class SplashScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {authStatus: null};
    }

    componentDidMount() {
        // setTimeout(() => this.props.navigation.navigate('Login'), 2000);
        setTimeout(() => this.resetNavigator('Login'), 2000);
    }

    resetNavigator(route) {
        let resetAction = NavigationActions.reset({
            index: 0,
            actions: [
                NavigationActions.navigate({routeName: route})
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