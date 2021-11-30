import React from 'react'
import "./Header.css";

import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Avatar } from "@mui/material";
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="header__icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Airbnb_Logo_B%C3%A9lo.svg/2560px-Airbnb_Logo_B%C3%A9lo.svg.png" alt="" />
            </Link>
            
            <div className="header__center">
                <input type="text" placeholder="Type something..."/>
                <SearchIcon />
            </div>

            <div className="header__right">
                <p> Become a host </p>
                <LanguageIcon />
                <ExpandMoreIcon />
                <Avatar />
            </div>
        </div>

    )
}
