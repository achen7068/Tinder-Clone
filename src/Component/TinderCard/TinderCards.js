import React, {Component, useState} from 'react';
import TinderCard from "react-tinder-card";
import styles from "./TinderCard.module.css";

function TinderCards () {

    const [people, setPeople] = useState([
        {
            name: 'Ariana Grande',
            url: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQ3MzM3MTcxNjA5NTkzNjQ3/ariana_grande_photo_jon_kopaloff_getty_images_465687098.jpg'
        },
        {
            name: 'Pokimane',
            url: 'https://pbs.twimg.com/media/DPvx6x-U8AAX_HA.jpg'
        }

    ]);



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