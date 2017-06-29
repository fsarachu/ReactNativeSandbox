/* @flow */

import React, {Component} from "react";
import {StyleSheet, Text, View} from "react-native";

export default class CaseToggleGreeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showUppercase: false,
        };

        setInterval(() => {
            this.setState({showUppercase: !this.state.showUppercase});
        }, 500);
    }

    render() {
        let name = this.state.showUppercase ? this.props.name.toUpperCase() : this.props.name.toLowerCase();
        return (
            <View style={styles.container}>
                <Text style={styles.content}>Hello {name}!</Text>
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
        backgroundColor: '#ed97e7',
    },
    content: {
        textAlign: 'center',
    },
});