import styled, { createGlobalStyle } from "styled-components";
import Footer from "../components/Footer";

const SitePage = styled.section`
  margin: 0.8em auto;
  width: 8.5in;
  padding: 4rem;
  background: #f9f9f9;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
  @media (max-width: 768px) {
    padding: 1rem;
    width: 80vw;
  }
  @media print {
    box-shadow: none;
  }
`;

export default function Layout({ children }) {
  return (
    <SitePage>
      <main>{children}</main>
      <Footer />
    </SitePage>
  );
}
