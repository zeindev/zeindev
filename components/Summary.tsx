import styled from "styled-components";

const Section = styled.section`
  padding: 2em 0 0;
`;

const SectionTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 500;
  border-bottom: 1px solid black;
`;

const ItemContainer = styled.section`
  display: grid;
  grid-auto-flow: ${(props) => props.columnAutoFlow ? 'column' : 'row'};
  gap: .6em;
  padding: 1.2em 0 0;
  ${(props) => props.spaceBetween && "justify-content: space-between"};
`;

const Item = styled.p`
  margin: 0;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.2em;
  @media (max-width: 768px) {
    text-align: justify;
  }
`;

function Summary({summary}) {
  return (
    <Section>
      <SectionTitle>Summary</SectionTitle>
      <ItemContainer>
          <Item>{summary}</Item>
      </ItemContainer>
    </Section>
  );
}

export default Summary;
