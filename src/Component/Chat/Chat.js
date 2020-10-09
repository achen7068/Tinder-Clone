import React from 'react';
import styles from './Chat.module.css';
import Avatar from "@material-ui/core/Avatar";
import {Link} from "react-router-dom";


function Chat ({name, message,profilePic, timestamp}) {

        return (

        <Link to={`/chat/${name}`}>
            <div className={styles.chat}>
                <Avatar className={styles.chatImage} alt={name} src={profilePic}/>
                <div className={styles.chatDetail}>
                    <h2>{name}</h2>
                    <p>{message}</p>
                </div>
                <p className={styles.timestamp}>{timestamp}</p>
            </div>
        </Link>

        );

}

export default Chat;