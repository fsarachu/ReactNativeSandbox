/* @flow */

import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class Greeting extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.content}>Hello {this.props.name}!</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        alignSelf: 'stretch',
        justifyContent: 'center',
        backgroundColor: '#92d485',
    },
    content: {
        textAlign: 'center',
    },
});