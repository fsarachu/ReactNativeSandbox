/* @flow */

import React, {Component} from "react";
import {Text, View} from "react-native";
import styles from "./styles";

export default class ProfileScreen extends Component {
    static navigationOptions = ({ navigation }) => ({
        title: `${navigation.state.params.name}'s Profile`,
    });


    render() {
        const { params } = this.props.navigation.state;

        return (
            <View style={styles.container}>
                <Text>Hello {params.name}!</Text>
            </View>
        );
    }
}