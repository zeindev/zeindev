import styled from "styled-components";
import { withRouter } from 'next/router';
const Section = styled.section`
  padding: 0;
`;

const SectionTitle = styled.h1`
  margin: 0 0 0.2em;
  font-size: 2em;
  font-weight: 500;
  border-bottom: 2px solid black;
`;

const SectionSubTitle = styled.h3`
  margin: 0;
  font-weight: 400;
  font-size: 1.2em;
`;

const Item = styled.p`
  margin: 2em 0 0;
  font-weight: 300;
  font-size: 1.2em;
  line-height: 1.2em;
  text-align: center;
`;

function Success({ router }) {
  setTimeout(() => {
    router.push('/');
  }, 4000)
  return (
    <Section>
      <SectionTitle>Access Key Requested</SectionTitle>
      <SectionSubTitle>Success</SectionSubTitle>
      <Item>An access key will be sent to your email as soon as this request is processed.</Item>
    </Section>
  );
}

export default withRouter(Success);
