import styled from "styled-components";

const MainDescriptionContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${"/assets/background.png"}) center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-x: hidden;
`;

const TextContainer = styled.div`
  max-width: 400px;
  padding: 70px;
  font-size: 30px;
  color: white;
  line-height: 2;
`;

const MainDescription: React.FC = () => {
  return (
    <MainDescriptionContainer>
      <TextContainer>
        저희 이로움은
        <br />
        환경과 기술의 융합을 통해
        <br />
        세상을 바꾸어 나갑니다.
      </TextContainer>
    </MainDescriptionContainer>
  );
};

export default MainDescription;
