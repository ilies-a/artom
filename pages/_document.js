import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
            rel="preload"
            href="/_next/static/media/NeueMontreal-Medium.b9da7318.otf"
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}