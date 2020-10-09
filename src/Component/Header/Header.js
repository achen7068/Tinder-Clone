import React from 'react';
import ForumIcon from '@material-ui/icons/Forum';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import styles from './Header.module.css';
import {Link, useHistory} from "react-router-dom";

function Header ({backButton}){

    const history = useHistory();

        return (
            <div className={styles.header}>
                {backButton ? (
                    <IconButton onClick={() => history.replace(backButton)}>
                        <ArrowBackIosIcon fontSize={"large"} className={styles.headerIcon}/>
                    </IconButton>
                    ) : (
                        <IconButton>
                            <PersonIcon className={styles.headerIcon} fontSize={"large"}/>
                        </IconButton>
                )}

                <Link to={'/'}>
                    <IconButton>
                        <img className={styles.headerLogo} src={"https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"} alt={"tinderLogo"}/>
                    </IconButton>
                </Link>
                <Link to = '/chat'>
                    <IconButton>
                        <ForumIcon className={styles.headerIcon} fontSize={"large"}/>
                    </IconButton>
                </Link>




            </div>
        );
}

export default Header;