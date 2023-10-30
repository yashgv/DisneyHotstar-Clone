import React from "react";
import styled from "styled-components";


const MainDiv= styled.div`
    height: 143px;
    width: 254px;
    border-radius: 8px;
    z-index: 1;
    cursor: pointer;
    transition: transform 0.15s ease-in 0.3s, z-index 0.15s ease-in 0.3s;
    &:hover{
        transform: scale(1.15);
        z-index: 2;
    }
`

const ImageContainer = styled.img`
    height: 100%;
    width: 100%;
    border-radius: inherit;
`

const SmallSlider = (props) => {
    return(
        <>
            <MainDiv>
                <ImageContainer src={props.cardImg}></ImageContainer>
            </MainDiv>
        </>
    )
}

export default SmallSlider;