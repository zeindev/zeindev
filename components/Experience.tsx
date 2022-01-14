import styled from "styled-components";
import Markdown from 'markdown-to-jsx';
import { formatDate } from "../shared/utils";
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
    gap: 0.2em;
  }
`;

const Item = styled.h3`
  font-weight: 400;
  font-size: 1.2em;
`;

const Tasks = styled(Markdown)`
  display: grid;
  li {
    font-weight: 300;
    font-size: 1.2em;
    line-height: 1.2em;
  }
`

function Experience({ items }) {
  return (
    <Section>
      <SectionTitle>Experience</SectionTitle>
      {items.map((item, i) => (
        <ItemContainer key={i}>
          <SubItemContainer spaceBetween>
            <Item>{item.position}</Item>
            <Item>
              {formatDate(item.startDate) +
                " - " +
                (item.endDate ? formatDate(item.endDate) : "Current")}
            </Item>
          </SubItemContainer>
          <SubItemContainer left>
            <Item>{item.employer + ","}</Item>
            <Item>{item.location}</Item>
          </SubItemContainer>
          <SubItemContainer>
            <Tasks>{item.tasks}</Tasks>
          </SubItemContainer>
        </ItemContainer>
      ))}
    </Section>
  );
}

export default Experience;
