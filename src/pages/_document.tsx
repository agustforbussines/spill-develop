/* eslint-disable @next/next/no-page-custom-font */
import Document, { Html, Head, Main, NextScript, DocumentInitialProps, DocumentContext } from 'next/document';
import { CssBaseline } from '@nextui-org/react';
import React from "react";
class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    styles: React.Children.toArray([initialProps.styles]),};
  }

  render() {
    return (
      <Html>
        <Head >
          <link rel="icon" href="/logo.svg" />
          {CssBaseline.flush()}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;