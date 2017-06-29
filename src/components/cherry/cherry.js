/* @flow */

import React, {Component} from "react";
import {Image} from "react-native";

export default class cherry extends Component {
    render() {
        return (
            <Image source={require('./img/cherry-250x250.png')} style={{width: 250, height: 250}}/>
        );
    }
}