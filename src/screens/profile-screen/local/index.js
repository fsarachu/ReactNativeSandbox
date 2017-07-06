/* @flow */

import React, {Component} from "react";
import JSONTree from 'react-native-json-tree'
import {Text, View} from "react-native";
import styles from "./styles";

export default class ProfileLocalScreen extends Component {
    static navigationOptions = {
        tabBarLabel: 'Local Profile',
    };

    constructor(props) {
        super(props);
        this.state = {
            localProfile: this.props.screenProps.user.local,
        };
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>Local profile</Text>
                <JSONTree data={this.state.localProfile}/>
            </View>
        );
    }
}