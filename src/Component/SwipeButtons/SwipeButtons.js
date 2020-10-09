import React from 'react';
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import IconButton from "@material-ui/core/IconButton";
import './SwipeButton.css'


function SwipeButtons () {

        return (
            <div className={"SwipeButtons"}>
                <IconButton>
                    <ReplayIcon className={"Replay"} fontSize={"large"}/>
                </IconButton>
                <IconButton>
                    <CloseIcon className={"Close"} fontSize={"large"}/>
                </IconButton>
                <IconButton>
                    <StarRateIcon className={"Star"} fontSize={"large"}/>
                </IconButton>
                <IconButton>
                    <FavoriteIcon className={"Favorite"} fontSize={"large"}/>
                </IconButton>
                <IconButton>
                    <FlashOnIcon className={"Flash"} fontSize={"large"}/>
                </IconButton>
            </div>
        );

}

export default SwipeButtons;