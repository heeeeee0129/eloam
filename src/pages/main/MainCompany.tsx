import styled from "styled-components";
import product from "/assets/product.png";

const MainCompanyContainer = styled.div`
  position: absolute;
  top: 100vh;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  background: white;
`;

const TitleContainer = styled.h2`
  position: absolute;
  top: 50px;
  right: 40px;
  font-size: 24px;
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
  position: absolute;
  bottom: 20px;
  left: 40px;
  width: 50%;
  img {
    width: 100%;
    height: auto;
  }
`;

const DescriptionContainer = styled.p`
  position: absolute;
  bottom: 10px;
  right: 30px;
  width: 30%;
  padding: 10px;
  font-size: 5px;
`;

const MainCompany: React.FC = () => {
  return (
    <MainCompanyContainer>
      <TitleContainer>COMPANY</TitleContainer>
      <ImageContainer>
        <img src={product} alt="Product" />
      </ImageContainer>
      <DescriptionContainer>
        X인터내셔널은 1953년 '락희산업주식회사'로 설립된 이래 변화와 성장을
        거듭해 왔습니다.'반도상사', '럭키금성상사', 그리고 'LG상사'를 거쳐
        지금의 LX인터내셔널에 이르기까지 대한민국의 무역 기반을 구축하고 국가
        경제 발전과 그 성장의 궤를 함께 해 왔습니다. LX인터내셔널은 트레이딩에서
        사업 개발 및 투자, 금융 조달 및 원료 공급, 물류에 이르기까지 Value Chain
        전 영역에서 글로벌 비즈니스를 수행하는 종합사업회사로서 기업 브랜드
        가치를 제고하고, 전세계 50여 개의 사업 거점을 기반으로 혁신과 성장을
        지속하고 있습니다. LX인터내셔널은 고객의 기대를 뛰어넘는 가치를
        제공함으로써 고객의 경쟁력 제고에 기여합니다.차별화된 고객가치 발굴과
        제공을 통해 Business Solution의 미래를 만들어 가고 있습니다.
      </DescriptionContainer>
    </MainCompanyContainer>
  );
};

export default MainCompany;
