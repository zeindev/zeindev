import styled from "styled-components";
import { Leaf } from "styled-icons/entypo";
const Section = styled.section`
  padding: 2em 0 0;
`;

const ItemContainer = styled.section`
  display: grid;
  grid-auto-flow: column;
  gap: 0.6em;
  padding: 0;
  justify-content: center;
`;

const Item = styled.div`
  margin: 0;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.2em;
  align-self: center;
`;

const GreenLeaf = styled(Leaf)`
  margin: 0;
  color: green;
  height: 1em;
  width: 1em;
`;

function Footer() {
  return (
    <Section>
      <ItemContainer>
        <Item>
          <GreenLeaf/>
        </Item>
        <Item>Built with Nextjs and Contentful</Item>
      </ItemContainer>
    </Section>
  );
}

export default Footer;
