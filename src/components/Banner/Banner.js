import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import "./Banner.css";

import { Button } from '@mui/material';
import Search from '../Search/Search';

export default function Banner() {
    const navigate = useNavigate();
    const [searchDates, setSearchDates] = useState(false);
    const toggleSearch = () => {
        setSearchDates(!searchDates);
    }
    return (
        <div className="banner">
            <div className="banner__search">
                <Button variant="outlined" className="banner__searchButton" onClick={toggleSearch}> { searchDates ? "Hide" : "Search Dates" } </Button>
            { searchDates && <Search /> }
            </div>
            <div className="banner__info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of getaway to uncover the hidden gems near you.
                </h5>

                <Button variant="outlined" onClick={() => navigate("/search")}> Explore Nearby </Button>
            </div>
        </div>
    )
}
