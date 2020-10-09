import React, {useState} from 'react';
import styles from './ChatScreen.module.css'
import {Avatar} from "@material-ui/core";

function ChatScreen () {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name: 'Pokimane',
            image: '...',
            messages: 'Yikes'
        },
        {
            name: 'Pokimane',
            image: '...',
            messages: 'lorem '
        },
        {
            messages: 'cum'
        }

    ])

    const handleSubmit = e => {
        e.preventDefault();

        setMessages([...messages, {messages: input}]);
        setInput('');
    }

        return (
            <div className={styles.ChatScreen}>
                <p className={styles.matchDate}>YOU MATCH WITH Pokimane ON 10-20-21</p>
                {messages.map(messages => (
                    messages.name ? (
                        <div className={styles.message}>
                            <Avatar
                                className={styles.image}
                                alt={messages.name}
                                src={messages.image}
                            />
                            <p className={styles.text}>{messages.messages}</p>
                        </div>
                        ) : (
                            <div>
                                <p className={styles.textUser}>{messages.messages}</p>
                            </div>
                            )
                    )
                )
                }
                <div className={styles.input}>
                    <form>
                        <input
                            value={input}
                            onChange={e => setInput(e.target.value)}
                            className={styles.inputField}
                               placeholder={'Enter a message'}
                               text={'text'}/>
                        <button onClick={handleSubmit} type={'submit'} className={styles.button}>SEND</button>
                    </form>
                </div>
            </div>
        );

}



export default ChatScreen;