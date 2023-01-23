import React from "react";
import styles from "./NewPost.module.css";

class NewPostForm extends React.Component {
    state = {
        newPostText: ''
    }

    addPost = () => {
        this.props.addPost(this.state.newPostText)
        this.setState({
            newPostText: ''
        })
    }

    updateText = (event) => {
        this.setState({
            newPostText: event.target.value
        })
    }

    render() {
        let {newPostText} = this.state.newPostText

        return (
            <div className={`${styles.container} ${styles.flex}`}>
                <textarea name="" id="" cols="20" rows="5"
                          className={styles.field}
                          onChange={this.updateText}
                          value={newPostText}/>
                <button onClick={this.addPost} className={styles.button}>Add post</button>
            </div>
        )
    }
}

export default NewPostForm;
