import styled from "styled-components";
import KeyRequired from "../components/KeyRequired";

const Name = styled.h1`
  margin: 0 0 0.2em;
  font-size: 2em;
  font-weight: 500;
  border-bottom: 2px solid black;
`;

const ItemContainer = styled.section`
  display: grid;
  grid-auto-flow: ${(props) => (props.columnAutoFlow ? "column" : "row")};
  gap: 1em;
  ${(props) => props.spaceBetween && "justify-content: space-between"};
`;

const ImageContainer = styled.img`
  margin: 0 auto;
  width: 10em;
  height: 10em;
  clip-path: circle(5em at 5em 5em);
`;

const Item = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

function Home({ resume }) {
  return (
    <>
      <Name>Oussama El Zein</Name>
      <ItemContainer>
        <Item>Welcome</Item>
        <ImageContainer src="/images/oussama.jpg" />
      </ItemContainer>
    </>
  );
}

export default Home;
