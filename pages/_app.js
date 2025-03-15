import React from 'react'
import MobileMenu from '../modules/Layout/MobileMenu'
import Navbar from '../modules/Layout/Navbar'
import Footer from '../modules/Layout/Footer'
import Head from 'next/head'
import favicon from "../public/favicon.ico"

function MyApp({ Component, pageProps }) {
  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
    <MobileMenu />
    <Navbar />
    <div className="mainComponent">
    <Component {...pageProps} />
  </div>
    <Footer />
  <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:site_name" content="MindMovers url shortner app" />
        <link
          rel="icon"
          href={favicon}
        />
        <style>
          {`
            html,
            body {
              position: relative;
              padding: 0;
              margin: 0;
              -webkit-font-smoothing: antialiased;
              font-family: 'Poppins', sans-serif;
              overflow-x: hidden;
              letter-spacing: 0.45px;
            }
            * {
              box-sizing: border-box;
            }
            li {
              list-style: none;
              font-family: 'Poppins', sans-serif;
            }
            a {
              color: inherit;
              text-decoration: none;
            }
            .mainComponent {
              margin-top: 65px;
            }
            .MuiDialog-container {
              width: 100%;
            }
            @font-face {
              font-family: 'Poppins-Medium.ttf';
              src: url('../public/fonts/Poppins-Medium.ttf');
            }
            @font-face {
              font-family: 'Poppins-Bold.ttf';
              src: url('../public/fonts/Poppins-Bold.ttf');
            }
          
        `}
        </style>
      </Head>
  </>
  )
}

export default MyApp
