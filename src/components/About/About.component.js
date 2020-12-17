import React from "react";
import AboutImageFirst from "../Assests/about-1.jpeg";
import AboutImageSecond from "../Assests/about-3.jpeg";
import {
  AboutMain,
  AboutContainer,
  AboutLeft,
  AboutRight,
  AboutImage,
  AboutTitle,
  AboutResturantName,
  AboutDes,
} from "./AboutElements";
function About() {
  return (
    <>
      <AboutMain>
        <AboutContainer>
          <AboutLeft>
            <AboutTitle>Discover</AboutTitle>
            <AboutResturantName>Shawarmati</AboutResturantName>
            <AboutDes>
              Shawarmati is a middle eastern resturant kitchen & grill that is
              based in Ontario. Shawarmati delievers real homemade grilled food
              cooked on coals.
            </AboutDes>
          </AboutLeft>

          <AboutRight>
            <AboutImage src={AboutImageFirst} />
            <AboutImage src={AboutImageSecond} />
          </AboutRight>
        </AboutContainer>
      </AboutMain>
    </>
  );
}

export default About;
