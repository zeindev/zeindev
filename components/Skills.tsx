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
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 1fr);
  gap: .4em;
  padding: 1em 0 0;
  @media (max-width: 768px) {
    grid-auto-flow: row;
    grid-template-rows: none;
  }
`;

const Item = styled.li`
  margin: 0;
  font-weight: 300;
  font-size: 1.2em;
`;

function Skills({skills}) {
  return (
    <Section>
      <SectionTitle>Skills</SectionTitle>
      <ItemContainer>
          {skills.map((skill, i) => <Item key={i}>{skill.description}</Item>)}
      </ItemContainer>
    </Section>
  );
}

export default Skills;
