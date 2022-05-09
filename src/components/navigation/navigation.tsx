import React from "react";
import { Link } from "react-router-dom";

export default function navigation() {
    return(
        <nav>
            <ul>
                <li><Link to="/">Discover</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
                <li><Link to="/profile">Profile</Link></li>
            </ul>
        </nav>
    )
};