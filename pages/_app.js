import "../styles/globals.css";

import { MoralisProvider } from "react-moralis";
import { motion, AnimatePresence } from "framer-motion";
function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence>
      <motion.div
        key={router.route}
        initial="pageInitial"
        animate="pageAnimate"
        exit="pageExit"
        variants={{
          pageInitial: {
            opacity: 0,
          },
          pageAnimate: {
            opacity: 1,
          },
          pageExit: {
            backgroundColor: "white",
            filter: `invert()`,
            opacity: 0,
          },
        }}
      >
        <MoralisProvider
          appId={process.env.NEXT_PUBLIC_APP_ID}
          serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}
        >
          <Component {...pageProps} />
        </MoralisProvider>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
