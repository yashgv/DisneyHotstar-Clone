import styled from "styled-components";
import React from "react";

const Title = styled.h1`
font-size:50px;
color:blue;
`
const Card = styled.div`
padding:10px;
background-color:yellow;
`

const Template = () => {
    return(
        <>
    <Card>
    <Title> React Workshp</Title>
    </Card>
    
    </>
    );
}

export default Template;