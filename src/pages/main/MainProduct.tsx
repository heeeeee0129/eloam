import styled from "styled-components";
import image from "/image.png";
const MainProductContainer = styled.div`
  position: absolute;
  top: 200vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleContainer = styled.h2`
  font-size: 24px;
  position: relative;
  &:after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: black;
  }
`;

const ImageContainer = styled.div`
  width: 70%;

  img {
    width: 100%;
    height: auto;
  }
`;
const MainProduct: React.FC = () => {
  return (
    <MainProductContainer>
      <TitleContainer>PRODUCT</TitleContainer>
      <ImageContainer>
        <img src={image} alt="image" />
      </ImageContainer>
    </MainProductContainer>
  );
};

export default MainProduct;
