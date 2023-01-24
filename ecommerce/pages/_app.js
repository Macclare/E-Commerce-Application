import { StateContext } from '@/context/StateContext';
import '@/styles/globals.css'
import React from 'react';
import { Layout } from '../components';
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
  return (
    <StateContext>
    <Layout>
      <Toaster/>
  <Component {...pageProps} />
  </Layout>
  </StateContext>
  )
}


// import { Html, Head, Main, NextScript } from 'next/document'

// export default function Document() {
//   return (
//     <Html lang="en">
//       <Head />
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }
