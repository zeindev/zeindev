import styled, { createGlobalStyle } from "styled-components";
import Head from 'next/head';
import Footer from "../components/Footer";

const GlobalStyle = createGlobalStyle`
  *{
    font-family: 'Sofia Pro', sans-serif;
  }
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    background: #d9d9c9;
  }
  ol, ul {
    list-style: inside;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
`;

const SitePage = styled.section`
  margin: 0.8em auto;
  width: 8.5in;
  padding: 4em;
  background: #f9f9f9;
  box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
    rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
`;

const Wrapper = styled.section`
  margin: 0;
  padding: 2em;
  background: #d9d9c9;
`;

export default function Layout({ children }) {
  return (
    <SitePage>
      <Head>
        <link href="https://fonts.cdnfonts.com/css/sofia-pro" rel="stylesheet"/>
      </Head>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </SitePage>
  );
}
