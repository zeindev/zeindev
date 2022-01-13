import styled from 'styled-components';

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
  gap: .4em;
  padding: 1em 0 0;
  ${(props) => props.spaceBetween && 'justify-content: space-between'};
`;

const Item = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 1.2em;
`;

function Experience() {
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      <ItemContainer>
        <Item>Experience Component 1</Item>
        <Item>Experience Component 2</Item>
        <Item>Experience Component 3</Item>
        <Item>Experience Component 4</Item>
      </ItemContainer>
    </Section>
  );
}

export default Experience;
