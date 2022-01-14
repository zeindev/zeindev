import styled from "styled-components";

const Section = styled.section`
  padding: 2em 0 0;
`;

const SectionTitle = styled.h1`
  font-size: 1.6em;
  font-weight: 500;
  border-bottom: 1px solid black;
`;

const ItemContainer = styled.ul`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(2, 1fr);
  gap: .4em;
  padding: 1.2em 0 0;
  @media (max-width: 768px) {
    grid-template-columns: none;
  }
`;

const Item = styled.li`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

function Skills({items}) {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <ItemContainer>
          {items.map((item, i) => <Item key={i}>{item.description}</Item>)}
      </ItemContainer>
    </Section>
  );
}

export default Skills;
