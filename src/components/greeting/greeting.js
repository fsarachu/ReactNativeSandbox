/* @flow */

import React, {Component} from "react";
import {Text, TextInput, View} from "react-native";
import styles from "./greeting.styles";

export default class Greeting extends Component {

    constructor(props) {
        super(props);
        this.state = {name: ''};
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput
                    style={styles.input}
                    placeholder='Type your name...'
                    onChangeText={(text) => this.setState({name: text})}/>

                <Text style={styles.content}>Hello {this.state.name}!</Text>

            </View>
        );
    }
}