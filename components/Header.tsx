import styled from "styled-components";

const Section = styled.section`
  padding: 0;
`;

const Name = styled.h1`
  margin: 0 0 0.2em;
  font-size: 2em;
  font-weight: 500;
  border-bottom: 2px solid black;
`;

const SectionContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  justify-content: space-between;
  @media (max-width: 768px) {
    gap: 2em;
    grid-auto-flow: row;
    justify-content: baseline;
  }
`;

const ItemContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 1em;
  @media (max-width: 768px) {
    grid-auto-flow: row;
    gap: .2em;
  }
`;

const Item = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

export default function Header({ resume }) {
  return (
    <Section>
      <Name>{resume.name}</Name>
      <SectionContainer>
        <Item>{resume.position}</Item>
        <ItemContainer>
          <Item>{resume.phone}</Item>
          <Item>{`${resume.city} ${resume.province}`}</Item>
          <Item>{resume.website}</Item>
          <Item>{resume.email}</Item>
        </ItemContainer>
      </SectionContainer>
    </Section>
  )
}

