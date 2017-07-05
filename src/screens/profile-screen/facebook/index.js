/* @flow */

import React, {Component} from "react";
import JSONTree from 'react-native-json-tree'
import {Text, View} from "react-native";
import styles from "./styles";

export default class ProfileFacebookScreen extends Component {
    render() {
        const userData = this.props.screenProps.user.facebook;

        if (!userData) {
            return (
                <View style={styles.container}>
                    <Text>Facebook profile</Text>
                    <Text>No facebook profile</Text>
                </View>
            );
        } else {
            return (
                <View style={styles.container}>
                    <Text>Facebook profile</Text>
                    <JSONTree data={userData}/>
                </View>
            );
        }
    }
}