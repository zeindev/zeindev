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
  grid-auto-flow: row;
  gap: 0.2em;
  padding: 1.2em 0 0;
  ${(props) => props.spaceBetween && "justify-content: space-between"};
`;

const SubItemContainer = styled(ItemContainer)`
  gap: 0.6em;
  padding: 0;
  grid-auto-flow: column;
  ${(props) => props.left && "justify-content: left"};
  @media (max-width: 768px) {
    grid-auto-flow: row;
    gap: .2em
  }
`;

const Item = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

function Education({ items }) {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      {items.map((item, i) => (
        <ItemContainer key={i}>
          <SubItemContainer spaceBetween>
            <Item>{item.title}</Item>
            <Item>{item.startYear + ' - ' + item.endYear}</Item>
          </SubItemContainer>
          <SubItemContainer left>
            <Item>{item.institution + ','}</Item>
            <Item>{item.location}</Item>
          </SubItemContainer>
        </ItemContainer>
      ))}
    </Section>
  );
}

export default Education;
