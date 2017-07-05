/* @flow */

import React, {Component} from "react";
import {Button, Text, TextInput, View} from "react-native";
import UserService from "../../services/user-service";
import Cherry from "../../components/cherry";
import styles from "./styles";

export default class LoginScreen extends Component {
    static navigationOptions = {
        title: 'Login',
    };

    constructor(props) {
        super(props);
        this.state = {
            username: '',
        };
    }

    signup() {
        const {navigate} = this.props.navigation;
        let user = {
            local: {
                name: this.state.username,
            },
        };

        UserService.save(user);
        navigate('Profile', {user});
    }

    render() {
        return (
            <View style={styles.container}>

                <Cherry/>

                <Text style={styles.title}>Enter your name</Text>

                <TextInput
                    onChangeText={(text) => {
                        this.setState((prev) => ({username: text}));
                    }}
                    placeholder="Username"
                    style={styles.input}/>

                <Button
                    title={'ENTER'}
                    onPress={this.signup.bind(this)}
                    style={{alignSelf: 'center'}}
                />

            </View>
        );
    }
}