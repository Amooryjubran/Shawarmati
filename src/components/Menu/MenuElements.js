import styled from "styled-components";

export const MenuContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem calc((100vw - 1300px) / 2);
  background-image: linear-gradient(
      to top,
      rgba(21, 15, 15, 0.8),
      rgba(21, 15, 15, 0.8)
    ),
    url(https://img5.goodfon.com/wallpaper/nbig/0/61/lavash-sous-shaverma-shaurma-kartoshka-salat-kartofel-kartos.jpg);
  background-size: cover;
  color: #fff;
`;

export const MenuHeader = styled.h1`
  display: inline-block;
  height: 100%;
  border-bottom: 4px solid #ffc600;
  margin: 0 auto;
  font: 50px cookie, cursive;
  font-family: "Marck Script", cursive;
`;

export const MenuButton = styled.a`
  height: 50px;
  margin: 10px 15px;
  padding: 10px 20px;
  border: 1px solid #ffc600;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #ff8c00;
    border: 1px solid #ff8c00;
    transform: translateY(3px);
  }
`;

export const MenuButtonActive = styled.a`
  height: 50px;
  margin: 10px 15px;
  padding: 10px 20px;
  border: 1px solid #ffc600;
  border-radius: 3px;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  letter-spacing: 1px;
  cursor: pointer;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  background-color: #ffc600;
  &:hover {
    background-color: #ff8c00;
    border: 1px solid #ff8c00;
  }
`;

export const MenuButtonContainer = styled.div`
  display: flex;
  margin: 50px 0;
  @media screen and (max-width: 677px) {
    flex-direction: column;
  }
`;

export const ItemContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 80px;
  padding: 30px;
  @media screen and (max-width: 677px) {
    grid-template-columns: auto !important;
  }
`;

export const ItemWrapper = styled.div`
  margin-bottom: 25px;
`;

export const ItemHeader = styled.div`
  display: flex;
  align-items: baseline;
`;

export const ItemTitle = styled.h3`
  font: 35px cookie, cursive;
  color: #ffc600;
  letter-spacing: 2px;
  margin: 0;
`;

export const ItemDots = styled.span`
  flex: 1;
  border-bottom: 1px dashed #aaa;
  margin: 0 15px;
`;

export const ItemPrice = styled.span`
  color: #ffc600;
  font: 31px cookie, cursive;
`;

export const ItemDescription = styled.p`
  position: relative;
  margin-bottom: 40px;
`;

export const BuyBtn = styled.div`
  width: 75px;
  background-color: #ffc600;
  color: black;
  text-align: center;
  border-radius: 2px;
  position: absolute;
  right: 0;
  margin: 15px 0;
  padding: 5px;
  cursor: pointer;
  text-transform: uppercase;
  box-shadow: 3px 3px 20px black;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #ff8c00;
    color: #fff;
    box-shadow: 5px 5px 20px black;
  }
`;
