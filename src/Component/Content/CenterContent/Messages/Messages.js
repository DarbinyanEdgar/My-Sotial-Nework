import React from "react";
import classes from './Messages.module.css'
import Avatar from "react-avatar";
import ProfileName from "./ProfileName/ProfileName";
import Message from "./Message/Message";
import Redirect from "react-router-dom/es/Redirect";

const Messages = (props) => {

    let state = props.messagePage

    let dialogImageElements = state.dialogData.map(dialogImage => <Avatar size="37" round="50px"
                                                                          src={dialogImage.img}/>)
    let dialogsElements = state.dialogData.map(dialog => <ProfileName name={dialog.name} id={dialog.id}/>)

    let messagesElements = state.messagesData.map(message => <Message message={message.message} id={message.id}/>)
    let newMessageText = state.newMessageText


    let newTextMessage = React.createRef();


    let onSendMessage = () => {
        props.addMessage()
        // props.dispatch(onSendMessageActionCreater())
    }
    let onMessageChange = () => {
        let text = newTextMessage.current.value;
        props.updateMassage(text);

        //props.dispatch(onMessageChangeActionCreater(text))

    }


    return (

        <div className={classes.messagesBox}>
            <div className={classes.mainBox}>
                <div className={classes.nameBox}>

                    <div className={classes.main}>
                        <div className={classes.name}>
                            <a>Messages</a>
                        </div>
                    </div>

                    <div className={classes.row}>
                        <div className={classes.row1}>
                            {dialogImageElements}
                        </div>
                        <div className={classes.row2}>
                            {dialogsElements}
                        </div>
                    </div>
                </div>
                <div className={classes.messages}>
                    {messagesElements}
                </div>
            </div>
            <div className={classes.input}>
                <form>
                    <textarea onChange={onMessageChange} ref={newTextMessage} value={props.newMessageText}
                              placeholder="   Type your text hear"/>
                </form>

                <div className={classes.sotic}>
                    <button onClick={onSendMessage}>Send Message</button>
                </div>

            </div>
        </div>
    )
}
export default Messages