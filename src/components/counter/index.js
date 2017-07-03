/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./styles";

export default class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.counterDisplay}>0</Text>
                <Text style={styles.text}>This is the counter component</Text>
            </View>
        );
    }
}