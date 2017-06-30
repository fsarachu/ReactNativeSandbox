import {StyleSheet} from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 15,
        backgroundColor: "#fff",
    },
    title: {
        color: '#444444',
        fontSize: 24,
        fontWeight: '700',
    },
    input: {
        alignSelf: 'center',
        height: 8 * 5,
        width: 8 * 30,
        marginTop: 8,
        marginBottom: 8,
        paddingHorizontal: 8,
        backgroundColor: '#f1f1f1',
        color: '#7E7E84',
        fontSize: 18,
        textAlign: 'center',
    },
});