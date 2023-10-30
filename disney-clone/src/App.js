import GlobalStyle from "./GlobalStyles";
import Template from "./Component/Template";
import SideNav from "./Component/SideNav";
import StudioCard from "./Component/StudioCard";
import { Studios, Languages, Genre } from "./Constants/Constants";
import SmallSlider from "./Component/SmallSlider";
import styled from "styled-components";
import Banner from "./Component/Banner";
import MovieCard from "./Component/MovieCard";
import { Latestrelease } from "./Constants/Constants";
import "boxicons";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css/bundle';

import Matches from "./Component/Matches"
import { Sports } from "./Constants/Constants";
import Footer from "./Component/Footer";

const MainWrapper = styled.main`
width: 100%;
`;

const ContentDiv = styled.div`
margin-top: -120px;
`;

const Title = styled.h2`
  color: white;
  font-size: 20px;
  height: 40px;
  margin-top: 10px;
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: ${props => props.studio ? "1300px" : "100%"};
.swiper {
  /* z-index: 5; */
  overflow-y: visible;
  color: white;
}
.swiper-slide {
  position: none;
}
.swiper-button-next {
  width: 40px;
  height: 100%;
  top: 10px;
  right: 0;
  &:hover {
    background: linear-gradient(269.25deg, #0f1014 0.62%,rgba(15,16,20,0)99.33%);
  }
}
.swiper-button-prev {
  width : 40px;
  height: 100%;
  top:10px;
  left: 0px;
  &:hover {
    background: linear-gradient(88deg, #0f1014 0.62%,rgba(15,16,20,0)99.33%);
  }
}
.swiper-backface-hidden{
  transform: none;
  backface-visibility: visible;
}
  --swiper-navigation-size: 20px;
  --swiper-navigation-top-offset: 50%;
  --swiper-navigation-sides-offset: 10px;
  --swiper-navigation-color: #fff;
  --swiper-theme-color:#fff;
`;

const Section = styled.div`
  position: relative;
  margin: 20px 0 50px 0;
`;
const App = () => {
  return (
    <>
      <GlobalStyle />

      <MainWrapper>
        <SideNav />
        <Banner />
        <ContentDiv>
        <Section>
            <Title>Latest Releases</Title>
            <Container>
              {Latestrelease.map((item) => {
                return (
                  <>
                    <MovieCard
                      cover={item.image}
                      top={item.Hover}
                      logo={item.logo}
                      year={item.year}
                      seasons={item.seasons}
                      availableIn={item.availableIn}
                      ratings={item.ratings}
                      desc={item.description}
                    ></MovieCard>
                  </>
                );
              })}
            </Container>
          </Section>
          <Section>
            <Title>Eng Hammer Ban,Bounce Back</Title>
            <Container>
              <Swiper 
                direction="horizontal"
                modules={[Navigation, A11y]}
                spaceBetween={10}
                slidesPerView={'auto'}
                navigation
              >
                {
                  Sports.map((item) => {
                    return(
                      <>
                      <SwiperSlide>
                        <Matches cImage={item.image} title={item.title} desc={item.description} duration={item.duration}/>  
                      </SwiperSlide>
                      </>
                    )
                  })
                }
              </Swiper>
            </Container>
          </Section>
          <Section>
            <Title>Latest Releases</Title>
            <Container>
            <Swiper 
                direction="horizontal"
                modules={[Navigation, A11y]}
                spaceBetween={30}
                slidesPerView={'auto'}
                navigation
              >
              {Latestrelease.map((item) => {
                return (
                  <>
                  <SwiperSlide>

                  <MovieCard
                    cover={item.image}
                    top={item.Hover}
                    logo={item.logo}
                    year={item.year}
                    seasons={item.seasons}
                    availableIn={item.availableIn}
                    ratings={item.ratings}
                    desc={item.description}
                  ></MovieCard>
                  </SwiperSlide>
                  </>
                );
              })}
              </Swiper>
            </Container>
          </Section>
          
          <Section>
            <Container studio>
              {Studios.map((item) => {
                return (
                  <>
                    <StudioCard image={item.image} video={item.video} />
                  </>
                );
              })}
            </Container>
          </Section>

          <Section>
            <Title>Popular Languages</Title>
            <Container>
            <Swiper
            direction="horizontal"
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={'auto'}
              navigation
            >
              {Languages.map((item) => {
                return (
                  <>
                  <SwiperSlide>
                    <SmallSlider cardImg={item.image}/>
                  </SwiperSlide>
                  </>
                );
              })
              }
            </Swiper>
            </Container>
          </Section>

          <Section>
            <Title>Popular Genres</Title>
            <Container>
            <Swiper
            direction="horizontal"
              modules={[Navigation, A11y]}
              spaceBetween={10}
              slidesPerView={'auto'}
              navigation
            >
              {Genre.map((item) => {
                return (
                  <>
                  <SwiperSlide>
                    <SmallSlider cardImg={item.image} />
                  </SwiperSlide>
                  </>
                );
              })}
            </Swiper>
            </Container>
          </Section>
          <Section>
            <Container>

            <Footer></Footer>
            </Container>
          </Section>
        </ContentDiv>
      </MainWrapper>
    </>
  );
};

export default App;