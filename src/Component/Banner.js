import React from 'react'
import styled from 'styled-components'
import Elemental from "../Images/Mainmovie.jpeg"
import Moviename from "../Images/Moviename.png"
import BannerCard from "./BannerCard"
import { Browse } from '../Constants/Constants'


const Content = styled.div`
width: 100%;
height: 100vh;
`;

const Container = styled.div`
  &:before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    display: block;
    height: 100vh;
    width: 1080px;
    background: linear-gradient( 90.43deg, rgba(15, 16, 20, 0.95) 16.24%, rgba(15, 16, 20, 0) 98.46% );
  }
`;

const Mainimg = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
object-position: top;
opacity: 0.65;
background: linear-gradient(
    
      rgba(15, 16, 20, 0.95) 16.24%,
      rgba(15, 16, 20, 0) 98.46%
    );
`;

const Aboutmovie = styled.div`
display: flex;
position: absolute;
width: 1456px;
justify-content: space-between;
padding: 16px 64px 172px 112px;
bottom: 0;
/* background: linear-gradient(180deg,rgba(15,16,20,0) 73.08%,rgba(15,16,20,.01) 77.84%,rgba(15,16,20,.05) 79.74%,#0f1014),linear-gradient(90deg,#0f1014,rgba(15,16,20,.8) 7.31%,rgba(15,16,20,.52) 15.54%,rgba(15,16,20,.12) 29.73%,rgba(15,16,20,0) 40.59%); */
`;

const Section = styled.div`
display: flex;
flex-direction: ${(props) => (props.end ? "row" : "column")};
width: ${(props) => (props.end ? "496px" : "416px")};
justify-content:  ${(props) => (props.end ? "space-between" : "flex-start")};
`;

const Flex = styled.div`
display: flex;    
align-items: center;
padding: 16px 0 0 0;
`;

const MovieLogo = styled.img`
display: flex;
flex-wrap: wrap;
justify-content: flex-start;
align-content: flex-end;
`

const Movieyear = styled.h3`
display: flex;
flex-direction: row;
justify-content: flex-start;
color: white;
font-size: 16px;
`;

const Rating = styled.h4`
display: flex;
align-items: center;
padding: 0 8px;
color: white;
background-color: hsla(0,0%,100%,.2);
height: 25px;
border-radius: 5px;
`

const About = styled.p`
color: white;
padding: 16px 0 0 0;
margin: 0;
line-height: 24px;
`
            
const Genre = styled.h4`
margin-top: 24px;
color: white;
`;

const ButtonDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding-top: 40px;
`;

const Watchnow = styled.button`
display: flex;
justify-content: center;
align-items: center;
width: 348px;
height: 52px;
padding: 12px 16px;
color: white;
border: none;
font-size: 18px;
font-weight: 600;
background-color: rgba(197, 197, 197,0.5);
border-radius: 10px;
cursor: pointer;
`;

const Plus = styled.button`
width: 52px;
height: 52px;
padding: 12px;
color: white;
background-color: rgba(197, 197, 197,0.5);
border-radius: 10px;
border: none;
cursor: pointer;
& box-icon {
  width: 24px;
  height: 24px;
  color: white;
}
`;

const Banner = () => { 
  return (
    <>
        <Content>
          <Mainimg src={Elemental}/>
          <Container />
          <Aboutmovie>
             <Section>
              <MovieLogo src={Moviename} />
              <Flex>
               <Movieyear>2023 . 1h 41m . 2 languages . </Movieyear>
               <Rating>U/A 7+</Rating>
              </Flex>
              <About>Fiery Ember is tested when she meets go-with-the-flow Wade in Element City.</About>
              <Genre>Kids | Animation | Fantasy | Family</Genre>
              <ButtonDiv>
                <Watchnow>
                     <box-icon name='play' color='white' type='solid' ></box-icon>
                     Watch Now
                </Watchnow>
                <Plus>
                   <box-icon name='plus' color='white' ></box-icon>
                </Plus>
              </ButtonDiv>
             </Section>

             <Section end>
             {Browse.map((item, index) => (
                <BannerCard
                  key={index}
                  image={item.image}
                />
              ))
            }
             </Section>
          </Aboutmovie>
        </Content>
    </>
  )
}

export default Banner;