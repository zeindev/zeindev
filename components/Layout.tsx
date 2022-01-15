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
    vertical-align: baseline;
  }
  form, input, label, textarea, button {
    appearance: none;
    border: none;
    border-radius: 0;
  }
  input, textarea {
    border: 1px solid lightgrey;
    font-size: 1rem;
    font-weight: 300;
    padding: .2em .6em;
  }
  textarea {
    padding: .8em .6em;
  }
  input:focus, textarea:focus {
    outline: 1px solid #a0a000;
  }
  button {
    padding: .6em;
    color: white;
    font-size: 1rem;
    width: fit-content;
    background-color: #a0a000;
  }
  body {
    background: #d9d9c9;
  }
  ol, ul {
    list-style: outside;
    margin-left: 1rem;
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
      <Head>
      <style>
@import url('http://fonts.cdnfonts.com/css/sofia-pro');
</style>
      </Head>
      <GlobalStyle />
      <main>{children}</main>
      <Footer />
    </SitePage>
  );
}
