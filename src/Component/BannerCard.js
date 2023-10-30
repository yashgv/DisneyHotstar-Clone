import React from "react";
import styled from "styled-components";

const Card =styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: flex-end;
    align-content: flex-end;
    margin-right: 2px;
    cursor: pointer;
`

const Img = styled.img`
    width: 78px;
    height: 44px;
    border: 1px solid transparent;
    border-radius: 5px;
    &:hover{
        height: 50px;
        width: 88px;
        opacity: 100%;
    }
`


const BannerCard = (props) =>{
    return(
        <>
        <Card>
            <Img src={props.image}></Img>
        </Card>
        </>
    )
}
export default BannerCard;