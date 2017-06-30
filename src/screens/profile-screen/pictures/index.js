/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./styles";

export default class ProfilePicturesScreen extends Component {
    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text>{params.name}'s pictures</Text>
            </View>
        );
    }
}