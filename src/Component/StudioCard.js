import React from "react";
import styled from "styled-components";
import { Studios } from "../Constants/Constants";

const Wrapper = styled.div`
    display: inline-flex;
    flex-direction: row;
    height: 114px;
    width: 203px;
    border-radius: 5px;
    transition: transform 0.3s ease-in-out;
    overflow: hidden;
    padding: 2px;
    box-sizing: border-box;
    margin-top: -20px;
    /* margin: 10px;
    margin-left:5px; */
    &:hover{
        transform: scale(1.1);
        cursor: pointer;
    }
`

const Video=styled.video`
    width:230px;
    height: 114px;
    object-fit: cover;
    position: absolute;
    border-radius: 4px;
    opacity: 0;
    &:hover{
        opacity: 100%;
        border-radius: 4px;
    }
`;

const Img = styled.img`
    height: 114px;
    width: 203px;
    &:hover{
        opacity: 0;
    }
`;


const StudioCard = (props) => {
    return(
        <>
            <Wrapper>
                <Img src={props.image}/>
                <Video autoPlay playsInline muted loop src={props.video}/>
            </Wrapper>
        </>
    )
}

export default StudioCard;