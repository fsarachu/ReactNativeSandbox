/* @flow */

import React, {Component} from "react";
import {Image, View} from "react-native";
import styles from "./cherry.styles";

export default class cherry extends Component {
    render() {
        let cherry = require('./img/cherry-250x250.png');

        return (
            <View style={styles.container}>
                <Image source={cherry} style={styles.content}/>
            </View>
        );
    }
}