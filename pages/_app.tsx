import { AppProps } from "next/app";
import "@styles/globals.css";

export default ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};
