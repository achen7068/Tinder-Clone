import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import styles from './Header.module.css';

function Header (){
        return (
            <div className={styles.header}>
                <IconButton>
                    <PersonIcon className={styles.headerIcon} fontSize={"large"}/>
                </IconButton>
                <img className={styles.headerLogo} src={"https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"} alt={"tinderLogo"}/>
                <IconButton>
                    <ForumIcon className={styles.headerIcon} fontSize={"large"}/>
                </IconButton>



            </div>
        );
}

export default Header;