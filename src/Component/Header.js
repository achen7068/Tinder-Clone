import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import styles from "./Header.modules.css"

function Header (){
        return (
            <div className={styles.header}>
                <ForumIcon className={styles.headerIcon} fontSize={"large"}/>
                    <img className={styles.headerLogo} src={"https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"} alt={"tinderLogo"}/>
                <PersonIcon className={styles.headerIcon} fontSize={"large"}/>
            </div>
        );

}

export default Header;