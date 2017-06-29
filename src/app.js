import React, {Component} from "react";
import {StyleSheet, View} from "react-native";
import Greeting from "./components/greeting/greeting";
import CaseToggleGreeting from "./components/case-toggle-greeting/case-toggle-greeting";
import Cherry from "./components/cherry/cherry";

export default class ReactNativeSandbox extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Greeting name="Franquito"/>
                <CaseToggleGreeting name="Franquito"/>
                <Cherry/>
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