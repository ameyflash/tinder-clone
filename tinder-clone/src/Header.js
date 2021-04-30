import React from 'react'
import './header.css'
import PersonIcon from '@material-ui/icons/Person';
import {IconButton} from '@material-ui/core';
import ModeCommentIcon from '@material-ui/icons/ModeComment';

function Header() {
    return (
        <div className='header'>
            <IconButton>
                <PersonIcon fontSize="large" className="header_icon" />
            </IconButton>

            <img
            className="header_logo"
            
            src="https://i.pcmag.com/imagery/reviews/02ibIXDUJNJ3V7KL8jhUNFf-7.1569480464.fit_lim.size_1050x591.png"

            alt=""
            />

            <IconButton>
                <ModeCommentIcon fontSize="large" className="header_icon" />
            </IconButton>
            
        </div>
    )
}

export default Header
