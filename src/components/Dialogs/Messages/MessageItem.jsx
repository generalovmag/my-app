import React from 'react'
import m from './MessageItem.module.css'

const MessageItem = (props) => {
  return (
    <div className={m.messages_item} id={props.id}>{props.text}</div>
  )
}

export default MessageItem