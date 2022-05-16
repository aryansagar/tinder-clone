import React from 'react'
import "./Header.css"
import { Link, useHistory } from "react-router-dom"

import PersonIcon from '@mui/icons-material/Person';
import ForumIcon from '@mui/icons-material/Forum';
import { IconButton } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Header({backButton}) {

    const history = useHistory();

    return (
        <div className="header">
            {backButton ? 
            (
            <IconButton>
                <ArrowBackIosIcon fontSize="large" className="header__back" />
            </IconButton>
            ) :
            (<IconButton>
            <PersonIcon className="header__icon" fontSize="large"/>
             </IconButton>)}
            
         

          <Link to="/" >

            <IconButton>
                <img className="header__logo"
                 src="https://logos-world.net/wp-content/uploads/2020/09/Tinder-Emblem.png"
                 alt="tinder logo" />
            </IconButton>

          </Link>
           
              <Link to ="/chat">

                  <IconButton>
                     <ForumIcon className="header__icon" fontSize="large"/>
                  </IconButton>
                  
              </Link>            

        </div>
    )
}

export default Header
