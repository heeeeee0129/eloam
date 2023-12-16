import styled from "styled-components";

const MainImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background: url(${"/assets/pageImage/materials.png"}) center/cover;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-x: hidden;
`;
const Materials: React.FC = () => {
  return <MainImageContainer />;
};

export default Materials;
