import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";

// https://next-auth.js.org/getting-started/example
function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider session={pageProps.session}>
      <Component {...pageProps} />;
    </SessionProvider>
  );
}

export default MyApp;
