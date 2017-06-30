/* @flow */

import React, {Component} from "react";
import {Text, TextInput, View} from "react-native";
import {RectangleButton} from 'react-native-button-component';
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

                <RectangleButton
                    backgroundColors={['#DB4437', '#DB4437']}
                    text={'Enter'.toUpperCase()}
                    onPress={() => navigate('Profile', {name: 'Franco'})}
                    style={{alignSelf: 'center'}}
                />

            </View>
        );
    }
}