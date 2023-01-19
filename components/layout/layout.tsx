import Head from "next/head";
import { ReactNode, useState } from "react";
import Navbar from "../header/navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Head>
        <title>Philip Adewole | Software Developer </title>
        <meta
          name="description"
          content="Philip's Portfolio | Software Developer"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <Navbar />
      <main>{children} </main>
    </main>
  );
}
