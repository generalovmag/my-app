import React from 'react'
import m from './Dialogs.module.css'
import DialogItem from "./Dialogs/DialogItem";
import MessageItem from "./Messages/MessageItem";

const Dialogs = (props) => {
  let newMessageText = props.newMessageText

  let sendMessage = () => {
    props.sendMessage()
  }
  let updateText = (e) => {
    let text = e.target.value
    props.updateTextMessage(text)
  }
  let newDialogs = props.dialogs
  let newMessages = props.messages
  let dialogsElements = newDialogs.map( dialog => <DialogItem name={dialog.name} key={dialog.id} id={dialog.id} />)
  let messageElements = newMessages.map( message => <MessageItem key={message.id} text={message.message} />)

  return (
    <div className={`${m.dialogs} ${m.flex}`}>
      <ul className={m.dialogs_list}>
        {dialogsElements}
      </ul>
      <div className={`${m.messages} ${m.flex}`}>
        {messageElements}
        <div className={`${m.messages_new} ${m.flex}`}>
          <textarea name="" id="" cols="20" rows="4"
                    className={m.message_new_text}
                    onChange={ updateText }
                    value={ newMessageText }/>
          <button onClick={ sendMessage } className={m.message_new_btn}>Send message</button>
        </div>
      </div>
    </div>
  )
}

export default Dialogs;