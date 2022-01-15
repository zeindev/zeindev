import Layout from "../components/Layout";
import type { AppProps } from "next/app";
import '../styles/global.css';

function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;
