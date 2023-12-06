import styled from "styled-components";

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
  font-size: 40px;
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
    width: auto;
    height: 100px;
    padding: 30px;
  }
`;
const MainContact: React.FC = () => {
  return (
    <MainContactContainer>
      <TitleContainer>CONTACT</TitleContainer>
      <ImageContainer>
        <img src={"/assets/instagram.png"} alt="image" />
        <img src={"/assets/youtube.png"} alt="image" />
        <img src={"/assets/contact.png"} alt="image" />
      </ImageContainer>
    </MainContactContainer>
  );
};

export default MainContact;
