import styled from "styled-components";
import Link from "next/Link";

const Section = styled.section`
  padding: 0;
`;

const SectionTitle = styled.h1`
  margin: 0 0 0.2em;
  font-size: 2em;
  font-weight: 500;
  border-bottom: 2px solid black;
`;

const SectionSubTitle = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

const ItemContainer = styled.section`
  display: grid;
  grid-auto-flow: ${(props) => (props.columnAutoFlow ? "column" : "row")};
  gap: 0.6em;
  padding: 1.2em 0 0;
  ${(props) => props.spaceBetween && "justify-content: space-between"};
`;

const Button = styled.button`
  cursor: pointer;
  justify-self: center;
`;

function KeyRequired() {
  return (
    <Section>
      <SectionTitle>Access Key Required</SectionTitle>
      <SectionSubTitle>Error</SectionSubTitle>
      <ItemContainer>
        <Link href="/request">
          <Button>Request an access key</Button>
        </Link>
      </ItemContainer>
    </Section>
  );
}

export default KeyRequired;
