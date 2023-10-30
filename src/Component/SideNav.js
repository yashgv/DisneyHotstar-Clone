import React from "react";
import styled from "styled-components";
import logo from "../Images/logo.webp";
import { Details } from "../Constants/Constants";


const NavTitle = styled.h3`
display: none;
margin-left: 10px;
font-size: 18px;
// !Important Keep NavTitle above NavWrapper
&.active {
    color: white;
    filter: drop-shadow(0 0 20px hsla(0,0%,100%,.7));
  }

`;

const NavItem = styled.div`
cursor: pointer;
color: #8c8d8f;
display: flex;
flex-direction: row;
align-items: center;
height: 60px;
width: max-content;
padding: 16px 12px;
margin-left: -20px;
&:hover{
    transform: scale(1.1);
    filter: drop-shadow(0 0 20px hsla(0,0%,100%,.6));
    color: white;
};
&:hover ${NavTitle}{
    margin-bottom: 1px;
}
`;


const NavBottom = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 60px 0 ;
    
`;

 const NavWrapper = styled.div`
    background-color: transparent;
    height: 100vh;
    width: 96px;
    position: fixed;
    z-index: 2;
    left:0;
    top:0;
    display: flex;
    flex-direction: column;
    align-items: start;
    &:hover ${NavTitle}{
        display: block;
        
    }
    &:hover{

    width: 20vw;
    transition: all 0.2s ease;
    background: linear-gradient( 90.43deg, rgba(15, 16, 20, 0.95) 50%, rgba(15, 16, 20, 0) 90.46% );

    }
    &:hover ${NavItem}{
        /* margin-left: -20px; */
        margin-left: -20px;
        transition: all 0.3s ease-in;
    }
    
    &:hover ${NavBottom}{
        align-items: start;
    }

 `;

 const NavTop = styled.div`
    width: 96px;
    height: 138px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
 `;
 const Image = styled.img`
  width: 51px;
  height: 37px;
  cursor: pointer;
 `;

const SubscribeBtn = styled.button`
     width: 83px;
     height: 24px;
     background-color:#FFCC751A; 
     font-size: 12px;
     color: #FFCC75;   
     border-radius: 10px;
     margin-top: 10px;
     border: 0px;
     display: flex;
     justify-content: center;
     align-items: center;
     cursor: pointer;
     

`;

const Subscribe = styled.p`
  color: #FFCC75;
  font-size: 12px;
  letter-spacing: 1px;
`;
const Icon = styled.div`
 margin-left: 50px;
 transform: scale(1.2);

 &.active {
    color: white;
    filter: drop-shadow(0 0 20px hsla(0,0%,100%,.7));
  }
  
`;

const SideNav = ()=>{
    return(
    <NavWrapper>
        <NavTop>
            <Image src={logo}/>
            <SubscribeBtn><Subscribe>Subscribe</Subscribe><box-icon color="#FFCC75" name='chevron-right' type='solid' ></box-icon></SubscribeBtn>
        </NavTop>
        <NavBottom>
            {
                Details.map((item)=>{
                    return(
                    <NavItem>
                    <Icon 
                      className={item.title === "Home" ? "active" : null}>
                      <item.icon className="react-icon" />
                    </Icon>
                    <NavTitle
                      className={item.title === "Home" ? "active" : null}
                    >{item.title}</NavTitle>
                  </NavItem>
                  )
                })
            }
            
        </NavBottom>
    </NavWrapper>
    );
}

export default SideNav;