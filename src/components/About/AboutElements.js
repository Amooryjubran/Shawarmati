import styled from "styled-components";

export const AboutMain = styled.div`
  min-height: 50vh;
  padding: 1.5rem calc((100vw - 1300px) / 2);
`;

export const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  min-height: 50vh;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

export const AboutLeft = styled.div`
  max-width: 500px;
  text-align: center;
`;
export const AboutTitle = styled.h1`
  color: gold;
  font-size: 8.5rem;
  font-weight: 100;
  line-height: 0.4;
  margin-bottom: 20px;
  letter-spacing: 2px;
  font-family: "Herr Von Muellerhoff", cursive;
  @media screen and (max-width: 960px) {
    margin-top: 50px;
  }
`;
export const AboutResturantName = styled.h2`
  letter-spacing: 2px;
  box-shadow: 3px 5px #e9ba23;
  max-width: 170px;
  margin: 0 auto 20px;
`;
export const AboutDes = styled.p`
  margin: 20px 0 20px 0;
`;
export const AboutRight = styled.div`
  display: flex;
  justify-content: space-between !important;
  gap: 2rem;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
export const AboutImage = styled.img`
  height: 360px;
  max-width: 100%;
  width: 200px;
  box-shadow: 8px 8px #fdc500;

  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;
