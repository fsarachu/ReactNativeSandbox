import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Greeting from "./components/greeting";
import CaseToggleGreeting from "./components/case-toggle-greeting";
import Cherry from "./components/cherry";

export default class ReactNativeSandbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Greeting/>
                <Cherry/>
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