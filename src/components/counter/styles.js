import {StyleSheet} from "react-native";
import {COLOR_TEXT_PRIMARY_LIGHT, COLOR_TEXT_SECONDARY_LIGHT, UNIT} from "../../variables/style";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#528de1',
    },
    counterDisplay: {
        fontSize: UNIT * 8,
        color: COLOR_TEXT_PRIMARY_LIGHT,
    },
    text: {
        fontSize: UNIT * 2,
        color: COLOR_TEXT_SECONDARY_LIGHT,
    },
    button: {},
});