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
        <link rel="icon" href="https://fav.farm/🐱‍👤" />
      </Head>
      <Navbar />
      <main>{children} </main>
    </main>
  );
}
