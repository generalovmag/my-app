const SEND_MESSAGE = 'SEND-MESSAGE'

let initaelState = {
  dialogs: [
    { id: 1, name: 'Maria'},
    { id: 2, name: 'Misha'},
    { id: 3, name: 'Ruslan'},
    { id: 4, name: 'Kate'},
    { id: 5, name: 'Max'},
    { id: 6, name: 'Kolya'},
    { id: 7, name: 'Olya'}
  ],
  messages: [
    { id: 1, message: 'Hi'},
    { id: 2, message: 'How are you?'},
    { id: 3, message: 'i\'m fine, and you?'},
    { id: 4, message: 'Fine'},
    { id: 5, message: 'How are you?'},
    { id: 6, message: 'Fine'},
  ]
}

const dialogsPageReducer = (state = initaelState, action) => {
  // debugger
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, {
          id: state.messages.length + 1,
          message: action.text,
        }],
      }
    default:
      return state
  }

}

export const sendMessageActionCreator = (newText) => ({ type: SEND_MESSAGE, text: newText })

export default dialogsPageReducer