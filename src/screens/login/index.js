/* @flow */

import React, {Component} from "react";
import {Button, Text, TextInput, View} from "react-native";
import Cherry from "../../components/cherry";
import styles from "./styles";

export default class Login extends Component {
    static navigationOptions = {
        title: 'Welcome!',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Cherry/>
                <Text style={styles.title}>Enter Event Code</Text>
                <TextInput
                    placeholder="DEMO"
                    style={styles.input}/>
                <Button
                    title='My Profile'
                    onPress={() => navigate('Profile', {name: 'Franco'})}
                />
            </View>
        );
    }
}