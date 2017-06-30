/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./styles";

export default class ProfileInfoScreen extends Component {
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text>{params.name}'s info</Text>
            </View>
        );
    }
}