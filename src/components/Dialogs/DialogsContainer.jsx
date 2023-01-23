import React from 'react'
import Dialogs from "./Dialogs";
import {sendMessageActionCreator} from "../../redux/dialogsPageReducer";
import {connect} from "react-redux";
import {AuthNavigate} from "../../hoc/withAuthNavigate";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPageReducer.dialogs,
        messages: state.dialogsPageReducer.messages
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (newMessageText) => {
            dispatch(sendMessageActionCreator(newMessageText))
        }
    }
}


export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    AuthNavigate
)(Dialogs)