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
        padding: 20,
        backgroundColor: 'rgba(0,0,0,.1)',
    },
});