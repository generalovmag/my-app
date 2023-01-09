import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";

// const GET_DIALOGS = 'GET-DIALOGS',
//       GET_MESSAGES = 'GET-MESSAGES',
//       GET_POSTS = 'GET-POSTS',
//       ADD_NEW_POST = 'ADD-NEW-POST',
//       UPDATE_TEXT_NEW_POST = 'UPDATE-TEXT-NEW-POST',
//       GET_TEXT_NEW_POST = 'GET-TEXT-NEW-POST',
//       SEND_MESSAGE = 'SEND-MESSAGE',
//       UPDATE_TEXT_NEW_MESSAGE = 'UPDATE-TEXT-NEW-MESAGE',
//       GET_TEXT_NEW_MESSAGE = 'GET-TEXT-NEW-MESSAGE'

let store = {
  _state: {
    dialogsPage: {
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
      ],
      newMessageText: ''
    },
    profilePage: {
      posts: [
        { id: 1, text: 'It\'s my first post!', likeCount: 12 },
        { id: 2, text: 'Hello, how are you?', likeCount: 1 },
        { id: 3, text: 'I\'m fine!', likeCount: 22 },
        { id: 4, text: 'It\'s my second post!', likeCount: 4 }
      ],
      newPostText: ''
    }
  },
  _renderTree () {
    alert('Если появилось это сообщение, значит что-то пошло не так!')
  },
  subscribe(observer) {
    this._renderTree = observer
  },
  // getState() {
  //   return this._state
  // },
  // getDialogs() {
  //   return this._state.dialogsPage.dialogs
  // },
  // getMessages() {
  //   return this._state.dialogsPage.messages
  // },
  // getPosts() {
  //   return this._state.profilePage.posts
  // },
  // addPost() {
  //   this._state.profilePage.posts.push({
  //     id: this._state.profilePage.posts.length + 1,
  //     text: this._state.profilePage.newPostText,
  //     likeCount: 0
  //   })
  //   this._state.profilePage.newPostText = ''
  //   this._renderTree(store)
  // },
  // updateTextNewPost(newText) {
  //   this._state.profilePage.newPostText = newText
  //   this._renderTree(store)
  // },
  // getTextNewPost() {
  //   return this._state.profilePage.newPostText
  // },
  // sendMessage() {
  //   this._state.dialogsPage.messages.push({
  //     id: this._state.dialogsPage.messages.length + 1,
  //     message: this._state.dialogsPage.newMessageText,
  //   })
  //   this._state.dialogsPage.newMessageText = ''
  //   this._renderTree(store)
  // },
  // updateTextMessage(newMessageText) {
  //   this._state.dialogsPage.newMessageText = newMessageText
  //   this._renderTree(store)
  // },
  // getTextNewMessage() {
  //   return this._state.dialogsPage.newMessageText
  // },
  dispatch (action) {
    this._state.profilePage = profilePageReducer( this._state.profilePage, action )
    this._state.dialogsPage = dialogsPageReducer( this._state.dialogsPage, action )
    this._renderTree(store)
    // switch (action.type) {
    //   case GET_DIALOGS:
    //     return this.getDialogs()
    //   case GET_MESSAGES:
    //     return this.getMessages()
    //   case GET_POSTS:
    //     return this.getPosts()
    //   case ADD_NEW_POST:
    //     return this.addPost()
    //   case UPDATE_TEXT_NEW_POST:
    //     return this.updateTextNewPost(action.text)
    //   case GET_TEXT_NEW_POST:
    //     return this.getTextNewPost()
    //   case SEND_MESSAGE:
    //     return this.sendMessage()
    //   case UPDATE_TEXT_NEW_MESSAGE:
    //     return this.updateTextMessage(action.text)
    //   case GET_TEXT_NEW_MESSAGE:
    //     return this.getTextNewMessage()
    // }
  }
}

// export const getStateActionCreator = () => ({ type: GET_STATE })
// export const getMessagesActionCreator = () => ({ type: GET_MESSAGES })
// export const getPostsActionCreator = () => ({ type: GET_POSTS })
// export const addPostActionCreator = () => ({ type: ADD_NEW_POST })
// export const updateTextNewPostActionCreator = (newText) => ({ type: UPDATE_TEXT_NEW_POST, text: newText })
// export const getTextNewPostActionCreator = () => ({ type: GET_TEXT_NEW_POST })
// export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE })
// export const updateTextMessageActionCreator = (newText) => ({ type: UPDATE_TEXT_NEW_MESSAGE, text: newText })
// export const getTextNewMessageActionCreator = () => ({ type: GET_TEXT_NEW_MESSAGE })

export default store;