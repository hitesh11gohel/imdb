import React, { ReactNode } from "react";
import Head from "next/head";

type Props = {
  children?: ReactNode;
  title?: string;
};

function Layout({ children, title }: Props) {
  return (
    <>
      <Head>
        <title>{title} | IMDb</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="data:image/png;base64,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" />
      </Head>
      {children}
    </>
  );
}

export default Layout;
