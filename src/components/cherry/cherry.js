/* @flow */

import React, {Component} from "react";
import {Image} from "react-native";

export default class cherry extends Component {
    render() {
        let cherry = require('./img/cherry-250x250.png');

        return (
            <Image source={cherry} style={{width: 250, height: 250}}/>
        );
    }
}