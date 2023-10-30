import React from "react";
import styled from "styled-components";


const CardContainer =styled.div`
    position:relative;
    display:inline-block;
    width: 248px;
    height: 196px;
    border-radius: 5px;
    cursor: pointer;
    /* background: linear-gradient(0deg, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7512254901960784) 12%, rgba(0,0,0,0.4) 80%); */
`

// const Upper = styled.div`
//     top: 0;
//     width: 100%;
//     height: 140px;
//     border-width: 4px;
//     background-color: red;
// `

// const Lower = styled.div`
//     bottom: 0;
//     width: 224px;
//     height: 56px;
//     padding: 8px 12px 0 12px;
//     background-color: blue;
// `




const Cover = styled.img`
    width: 100%;
    height: 140px;
    border-width: 4px;
    border-radius: inherit;
    opacity: 1;
    object-fit: cover;

    transition: transform 0.5s ease-in-out;
    &:hover{
        opacity: 0;
    }
`


const Title = styled.p`
    margin-top: 0;
    font-weight: 500;
    font-size: 18;
    color: white;
    overflow: hidden;   
    overflow-wrap: break-word;
    `

const Gradient = styled.div`
    width: 100%;
    height: 140px;
    position: absolute;
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.4) 20%, rgba(0,0,0,0) 60%),url({props.cImage});
    background-size:cover;
    
`

const Play = styled.div`
    position: absolute;
    margin-top: -30px;
    margin-left: 10px;
    height: 20px;
    width: 20px;
`
const Duration = styled.div`
    position: absolute;
    color: white;
    margin-top: -30px;
    margin-left: 80%;
    height: 20px;
    width: 20px;
`

const HoverWrapper = styled.div`
    position: absolute;
    top: -32%;
    left: -24%;
    display: flex;
    flex-direction: column;
    width: 336px;
    height: auto;
    background-color: #16181f;
    border-radius: 5px;
    opacity: 0;
    transform-origin: center center;
    transition-delay:0.4s ;
    transition: all 0.2s ease-in-out;
    transform: scale(0.53374,0.606);
    overflow: hidden;
    &:hover{
        opacity: 1;
        z-index: 100;
        transform: scale(1);
        transition-delay:0.4s ;
    }
    &:hover ${Gradient}{
        width: 336px;
        height: 189px;
    }
    &:hover ${Play}{
        position: absolute;
        margin-top: 150px;
        margin-left: 10px;
        height: 20px;
        width: 20px;
    }
    &:hover ${Duration}{
        position: absolute;
        margin-top: 150px;
        margin-left: 90%;
        height: 20px;
        width: 20px;
    }
    

`

const ImgTop = styled.img`
    border-radius:inherit;
    width: 336px;
    height: 189px;
    object-fit: cover;
    object-position: center;
`


const BottomContainer = styled.div`
    margin: 0px 12px 0px 12px;
    background-color: #16181f;
    `;
const MovieInfo = styled.p`
color:white;
font-size: 14px;
font-weight: 600;
`

const Description = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: #8f98b2;
    margin-top: 4px;
`


const Matches = (props) => {
    return(
        <>
        <CardContainer>
            <Gradient></Gradient>
            <Cover src={props.cImage}/>
            <Play>
                <box-icon name='play' color='white' type='solid' ></box-icon>
            </Play>
            <Duration>
                {props.duration}
            </Duration>
            <Title>{props.title}</Title>
            <HoverWrapper>
                <Gradient>
                </Gradient>
                <Play>
                    <box-icon name='play' color='white' type='solid' ></box-icon>
                </Play>
                <Duration>
                    {props.duration}
                </Duration>
                <ImgTop src={props.cImage}>
                </ImgTop>
                 <BottomContainer>
                    <MovieInfo>
                        {props.title}
                    </MovieInfo>
                    <Description>
                        {props.desc}
                    </Description>
                 </BottomContainer>
            </HoverWrapper>
        </CardContainer>
        </>
    );
}

export default Matches;