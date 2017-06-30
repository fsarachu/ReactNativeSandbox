/* @flow */

import React, {Component} from "react";
import {View} from "react-native";
import Cherry from "../../components/cherry";
import styles from "./styles";

export default class SplashScreen extends Component {

    componentDidMount() {
    }

    render() {
        return (
            <View style={styles.container}>
                <Cherry/>
            </View>
        );
    }
}