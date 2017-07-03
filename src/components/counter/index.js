/* @flow */

import React, {Component} from "react";
import {Button, Text, View} from "react-native";
import styles from "./styles";

export default class Counter extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.counterDisplay}>{this.props.count}</Text>
                <Text style={styles.text}>This is the counter component</Text>
                <Button title="INCREMENT" onPress={this.props.increment}/>
                <Button title="DECREMENT" onPress={this.props.decrement}/>
                <Button title="RESET" onPress={this.props.reset}/>
            </View>
        );
    }
}