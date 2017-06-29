/* @flow */

import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";

export default class Greeting extends Component {
    render() {
        return (
            <Text style={styles.container}>Hello {this.props.name}!</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#92d485',
    },
});