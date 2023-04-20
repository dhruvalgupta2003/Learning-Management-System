import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ReactPlayer from "react-player/youtube";

const Container = styled.div`
  width: 70%;
  height: fit-content;
  background-color: #f4f4f4;
  margin-left: auto;
  margin-right: auto;
  border-radius: 24px;
`;
const Wrapper = styled.div``;
const Title = styled.div`
  //   font-style: cursive;
  border-top: 2px solid gray;
  //   border-length: 20px;
  font-weight: 1000;
  font-size: 30px;
  line-height: 70px;
  padding: 0px 160px;
  color: #002b9a;
`;
const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
`;
const Heading = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  //   line-height: 35px;
  //   width: 00px;
  color: #524fdb;
`;
const About = styled.p`
  width: 80%;
`;

function Course() {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const [courses, setCourses] = useState([]);
  useEffect(() => {
    const getCourses = async () => {
      try {
        const res = await axios.get(`http://localhost:8080/api/courses/` + id);

        setCourses(res.data);
        console.log(res);
      } catch (err) {
        console.log(err);
      }
    };
    getCourses();
  }, [id]);
  return (
    <div>
      <Header />
      {/* <p>{courses.title}</p> */}
      <Wrapper>
        <Title>{courses.title}</Title>
        <Container>
          <a href={courses.videos}>
            <img
              src={courses.imageUrl}
              style={{
                height: "400px",
                width: "70%",
                borderRadius: "36px",
                padding: "20px",
                marginLeft: "auto",
                marginRight: "auto",
                zIndex: "-1",
              }}
            />
          </a>
          <InnerContainer>
            {/* <Heading>About the position:</Heading> */}
            <About>{courses.description}</About>
          </InnerContainer>
          <InnerContainer>
            <Heading>Difficulty level:</Heading>
            <About>{courses.difficultyLevel}</About>
          </InnerContainer>

          <InnerContainer>
            <Heading>Lead:</Heading>
            <About>{courses.lead}</About>
          </InnerContainer>

          <InnerContainer>
            <Heading>Price:</Heading>
            <About>{courses.price}</About>
          </InnerContainer>
          <InnerContainer>
            <Heading>Requirements:</Heading>
            <About style={{ alignItems: "center" }}>
              {/* <GoPrimitiveDot style={{ color: "black" }} />{" "} */}
              {courses.requirements}
              {/* <br /> <GoPrimitiveDot style={{ color: "black" }} />{" "} */}
              {/* {career.prerequesite2} */}
            </About>
          </InnerContainer>

          <InnerContainer>
            <Heading>Link:</Heading>
            <About>
              <a href={courses.videos}>{courses.videos}</a>
            </About>
          </InnerContainer>
          <InnerContainer>
            <Heading>What you will learn:</Heading>
            <About>{courses.whatYouWillLearn}</About>
          </InnerContainer>
        </Container>
      </Wrapper>
      <Footer />
    </div>
  );
}

export default Course;
