/* @flow */

import React, {Component} from "react";
import {StyleSheet, Text} from "react-native";

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
            <Text style={styles.container}>Hello {name}!</Text>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: 'rgba(0,0,0,.1)',
    },
});