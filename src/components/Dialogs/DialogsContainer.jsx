import React from 'react'
import Dialogs from "./Dialogs";
import {sendMessageActionCreator, updateTextMessageActionCreator} from "../../redux/dialogsPageReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogsPageReducer.newMessageText,
    dialogs: state.dialogsPageReducer.dialogs,
    messages: state.dialogsPageReducer.messages
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator())
    },
    updateTextMessage: (text) => {
      dispatch(updateTextMessageActionCreator(text))
    }
  }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;


//
// const DialogsContainer = (props) => {
//   let newMessageText = props.state.dialogsPageReducer.newMessageText
//   let dialogs = props.state.dialogsPageReducer.dialogs
//   let messages = props.state.dialogsPageReducer.messages
//
//   let sendMessage = () => {
//     props.dispatch(sendMessageActionCreator())
//   }
//   let updateTextMessage = (text) => {
//     props.dispatch(updateTextMessageActionCreator(text))
//   }
//
//   return (
//     <Dialogs newMessageText={newMessageText}
//              Dialogs={dialogs}
//              messages={messages}
//              sendMessage={sendMessage}
//              updateTextMessage={updateTextMessage}
//     />
//   );
// };
