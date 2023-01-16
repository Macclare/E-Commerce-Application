import '@/styles/globals.css'
import React from 'react';

export default function App({ Component, pageProps }) {
  return (
  <Component {...pageProps} />
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
