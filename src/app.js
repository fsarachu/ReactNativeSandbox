import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Greeting from "./components/Greeting";
import CaseToggleGreeting from "./components/CaseToggleGreeting";

export default class ReactNativeSandbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Greeting name="Franquito"/>
                <CaseToggleGreeting name="Franquito"/>
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