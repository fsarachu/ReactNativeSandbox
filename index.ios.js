/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";
import Greeting from "./app/components/Greeting";

export default class ReactNativeSandbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Greeting name="Franquito"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#72cdff',
    },
});

AppRegistry.registerComponent('ReactNativeSandbox', () => ReactNativeSandbox);
