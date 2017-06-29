/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./greeting.styles";

export default class Greeting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>Hello {this.props.name}!</Text>
            </View>
        );
    }
}