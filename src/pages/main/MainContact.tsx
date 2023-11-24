import styled from "styled-components";
import contact from "/assets/contact.png";

const MainContactContainer = styled.div`
  position: absolute;
  top: 300vh;
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
  width: 40%;
  img {
    width: 100%;
    height: auto;
  }
`;
const MainContact: React.FC = () => {
  return (
    <MainContactContainer>
      <TitleContainer>CONTACT</TitleContainer>
      <ImageContainer>
        <img src={contact} alt="image" />
      </ImageContainer>
    </MainContactContainer>
  );
};

export default MainContact;
