import "@/styles/globals.css";
import '@fontsource/poppins';
import toast, { Toaster } from 'react-hot-toast';


export default function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}
