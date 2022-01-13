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
  grid-auto-flow: ${(props) => (props.columnAutoFlow ? "column" : "row")};
  gap: 0.2em;
  padding: 1em 0 0;
  ${(props) => props.spaceBetween && "justify-content: space-between"};
`;

const SubItemContainer = styled(ItemContainer)`
  gap: 0.6em;
  padding: 0;
  ${(props) => props.left && "justify-content: left"};
`;

const Item = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 1.2em;
`;

function Education({ items }) {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      {items.map((item, i) => (
        <ItemContainer key={i}>
          <SubItemContainer columnAutoFlow spaceBetween>
            <Item>{item.title}</Item>
            <Item>{item.startYear + ' - ' + item.endYear}</Item>
          </SubItemContainer>
          <SubItemContainer columnAutoFlow left>
            <Item>{item.institution + ','}</Item>
            <Item>{item.location}</Item>
          </SubItemContainer>
        </ItemContainer>
      ))}
    </Section>
  );
}

export default Education;
