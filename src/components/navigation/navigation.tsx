import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledNav = styled.nav`
    background-color: #B0695A;
`;
const StyledUl = styled.ul`
    list-style-type: none;
    display: flex;
    justify-content: space-between;
    padding: 0 10%;
    height: 5rem;
    margin: 0;
`;
const StyledLi = styled.li`
    display: flex;
    align-items: center;
`;
const StyledLink = styled(Link)`
    color: #ECE5DE;
    text-decoration: none;
`;

export default function navigation() {
    return(
        <StyledNav>
            <StyledUl>
                <StyledLi><StyledLink to="/">Discover</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/favourites">Favourites</StyledLink></StyledLi>
                <StyledLi><StyledLink to="/profile">Profile</StyledLink></StyledLi>
            </StyledUl>
        </StyledNav>
    )
};