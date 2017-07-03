import React from "react";
import {connect} from "react-redux";
import Counter from "../components/counter";

const mapStateToProps = state => ({
    count: state
});

const mapDispatchToProps = (dispatch) => ({
    increment: () => {
        dispatch({type: 'INCREMENT'})
    },
    decrement: () => {
        dispatch({type: 'DECREMENT'})
    },
    reset: () => {
        dispatch({type: 'RESET'})
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter)