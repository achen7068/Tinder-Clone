import React, {Component, useState, useEffect} from 'react';
import TinderCard from "react-tinder-card";
import database from "../../Firebase";
import styles from "./TinderCard.module.css";

function TinderCards () {

    const [people, setPeople] = useState([]);

    useEffect(() => {
        database.collection('people').onSnapshot(snapshot => (
           setPeople(snapshot.docs.map(doc => doc.data()))
        ))
    },[])

        return (
            <div className={styles.container}>
                {people.map(person => (
                    <TinderCard
                        className={styles.swipe}
                        key={person.name}
                        preventSwipe={['up','down']}
                    >
                        <div style={{backgroundImage: `url(${person.url}`}} className={styles.card}>
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                ))}
            </div>
        );
}

export default TinderCards;