import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import ScrollToTop from "../components/scrollToTop";
import Navbar from "../components/navbar";
import Home from "../components/home";
import Free from "../components/free";
import Clients from "../components/clients";
import Release from "../components/release";
import Like from "../components/like";
import Footer from "../components/footer";
import SuperRare from "../components/superRare";
import {useState} from "react";

// export async function getServerSideProps(ctx: any) {
//     if (!ctx.req.cookies.kcToken) {
//         return {
//             redirect: {
//                 destination: "/login"
//             }
//         };
//     }
//
//     return { props: {} };
// }

function App({ Component, pageProps }: AppProps) {
    const [theme, setTheme] = useState("dark");

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark")
    }

  return (
      <div className={"app-container"} data-theme={theme}>
         <ScrollToTop />
         <Navbar changeTheme={changeTheme} currentTheme={theme} />
         <Home />
         <Free />
         <SuperRare />
         <Release />
         <Like />
          <Clients />
         <Footer />
      </div>
  )
}

export default App
