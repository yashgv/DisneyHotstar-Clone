import React from "react";
import styled from "styled-components";
import google from "../Images/google.png";
import ios from "../Images/ios-appstore.png"

const FooterContent = styled.div`
    width: 100%;
    padding: 10px;
    margin-bottom: 30px;
`

const Container = styled.div`

    line-height: 40px;
    width: 100%;
    display: flex;
    flex-direction: row;
`
const Column = styled.div`
    padding-right: 15%;
    margin-left: ${(props) => (props.connect ? "7%" : "0")};
`

const Head = styled.h4`
    color: white;
`
const List = styled.div`
    list-style: none;
    text-decoration: none;
    color: #8f98b2;
    display: ${(props) => (props.flex ? "flex": "")};
    justify-content: space-evenly;
`
const ListEle = styled.div`
cursor: pointer;
    font-size: 15px;
`
const CopyrightWrapper = styled.div`
line-height: 25px;
    margin-top: 20px;
    width: 100%;
    display: flex;
`

const Copyright = styled.div`
    flex-basis: 1;
    font-size: 15px;
    color: #8f98b2;
`
const Terms = styled.div`
    margin-left: -20px;
    display: flex;
    justify-content: space-evenly;
    cursor: pointer;
    width: 300px;
`
const Tags = styled.div`
    
`

const Install = styled.div`
    margin-left: 45%;

`
const InstallImg = styled.img`
    cursor: pointer;
    width: 130px;
    margin-right: 10px;

`


const Footer = ()=> {
    return(
        <>
        <FooterContent>

            <Container>
                <Column>
                    <Head>Company</Head>
                    <List>
                        <ListEle>About Us</ListEle>
                        <ListEle>Career</ListEle>
                    </List>
                </Column>
                <Column>
                    <Head>View in Website</Head>
                    <List flex>
                        <ListEle><box-icon color="#8f98b2" name='check' ></box-icon></ListEle>
                        <ListEle>English</ListEle>
                    </List>
                </Column>
                <Column>
                    <Head>Need Help?</Head>
                    <List>
                        <ListEle>Visit Help Center</ListEle>
                        <ListEle>Share Feedback</ListEle>
                    </List>
                </Column>
                <Column connect>
                    <Head>Connect With Us</Head>
                    <List flex>
                        <ListEle>
                                <box-icon color="white" type='logo' name='facebook'></box-icon>
                        </ListEle>
                        <ListEle>
                            <box-icon color="white" name='twitter' type='logo' ></box-icon>
                        </ListEle>
                    </List>
                </Column>
            </Container>
            <CopyrightWrapper>
                <Copyright>
                    © 2023 STAR. All Rights Reserved.
                    <Terms>
                        <Tags>Terms Of Use</Tags>
                        <Tags>Privacy Policy</Tags>
                        <Tags>FAQ</Tags>
                    </Terms>
                </Copyright>
                <Install>
                    <InstallImg src={google}></InstallImg>
                    <InstallImg src={ios}></InstallImg>
                </Install>
            </CopyrightWrapper>
        </FooterContent>
        </>
    );
}

export default Footer;