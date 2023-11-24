import MainDescription from "./MainDescription";
import styled from "styled-components";
import MainCompany from "./MainCompany";
import MainProduct from "./MainProduct";
import MainContact from "./MainContact";

const MainContainer = styled.div``;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <MainDescription />
      <MainCompany />
      <MainProduct />
      <MainContact />
    </MainContainer>
  );
};

export default Main;
