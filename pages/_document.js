import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link
            rel="preload"
            href="/fonts/NeueMontreal-Medium.otf"
            as="font"
            crossOrigin
            type="font/otf"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}