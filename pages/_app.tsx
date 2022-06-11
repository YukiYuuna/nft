import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScrollToTop from "../components/scrollToTop";
import Navbar from "../components/navbar";
import Home from "../components/home";
import Free from "../components/free";
import Clients from "../components/clients";
import Release from "../components/release";
import Like from "../components/like";
import SignUp from "../components/signUp";
import Footer from "../components/footer";
import SuperRare from "../components/superRare";

function App({ Component, pageProps }: AppProps) {

  return (
      <div className={"app-container"}>
         <ScrollToTop />
         <Navbar />
         <Home />
         <Free />
         <Clients />
            <SuperRare />
         <Release />
         <Like />
         <SignUp />
         <Footer />
      </div>
  )
}

export default App
