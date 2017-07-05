/* @flow */

import React, {Component} from "react";
import JSONTree from 'react-native-json-tree'
import {Text, View} from "react-native";
import styles from "./styles";

export default class ProfileLocalScreen extends Component {
    render() {
        const userData = this.props.screenProps.user.local;

        return (
            <View style={styles.container}>
                <Text>Local profile</Text>
                <JSONTree data={userData}/>
            </View>
        );
    }
}