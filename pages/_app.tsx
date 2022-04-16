import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Wrapper, Status } from "@googlemaps/react-wrapper";

function App({ Component, pageProps }: AppProps) {
    const render = (status: Status) => {
        return <h1>{status}</h1>;
    };

  return (
      <Wrapper apiKey="AIzaSyCubd3LJdqByD_eySPXbuXcE_BkkTRHSpc" render={render}>
        <Component {...pageProps} />
      </Wrapper>
  )
}

export default App
