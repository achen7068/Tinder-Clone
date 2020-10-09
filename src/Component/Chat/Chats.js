import React from 'react';
import styles from './Chats.module.css'
import Chat from "./Chat";

function Chats() {

        return (
            <div className={styles.chats}>
                <Chat
                    name={"Pokimane"}
                    message={"Hey, How are you"}
                    timestamp={"5 minutes ago"}
                />
                <Chat
                    name={"Riley Reid"}
                    message={"Hey, How are you"}
                    timestamp={"5 minutes ago"}
                />    <Chat
                name={"Lana Rhodes"}
                message={"Hey, How are you"}
                timestamp={"5 minutes ago"}
            />    <Chat
                name={"Selena"}
                message={"Hey, How are you"}
                timestamp={"5 minutes ago"}
            />


            </div>
        );

}

export default Chats;