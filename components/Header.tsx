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

const ItemContainer = styled.section`
  display: grid;
  grid-auto-flow: ${(props) => (props.columnAutoFlow ? "column" : "row")};
  gap: 1em;
  ${(props) => props.spaceBetween && "justify-content: space-between"};
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
      <ItemContainer columnAutoFlow spaceBetween>
        <Item>{resume.position}</Item>
        <ItemContainer columnAutoFlow>
          <Item>{resume.phone}</Item>
          <Item>{`${resume.city},${resume.province}`}</Item>
          <Item>{resume.website}</Item>
          <Item>{resume.email}</Item>
        </ItemContainer>
      </ItemContainer>
    </Section>
  )
}

