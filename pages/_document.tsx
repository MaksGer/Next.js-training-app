// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {DocumentContext, DocumentInitialProps, Head, Html, Main, NextScript} from "next/document";
import React from "react";

export default  class MyDocument extends Document {
    static async getInitialProps(context: DocumentContext): Promise<DocumentInitialProps> {
        const initialProps = await Document.getInitialProps(context);
        return { ...initialProps };
    }

    render(): JSX.Element {
        return(
          <Html lang="ru">
              <Head>
                  {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
                  <title>Next.js test app</title>
                  <link rel="preconnect" href="https://fonts.gstatic.com" />
                  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap" rel="stylesheet" />
              </Head>
              <body>
                <Main />
                <NextScript />
              </body>
          </Html>
        );
    }
}
