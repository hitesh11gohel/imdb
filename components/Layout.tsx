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
      </Head>
      {children}
    </>
  );
}

export default Layout;
