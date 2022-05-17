import React from "react";
import styled from "styled-components";
import { MerchantCard }  from "../";

const StyledDiv = styled.div`
    display: grid;
    grid-column-start: 2;
    grid-column-end: 2;
    grid-row-start: 2;
    grid-row-end: 2;

`;

const num = 5;

export const DiscoverPage = () => {
    return(
        <StyledDiv>
           <MerchantCard/>
           <MerchantCard/>
           <MerchantCard/>
           <MerchantCard/>
        </StyledDiv>
    )
};