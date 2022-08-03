import { ReactNode } from "react";
import Navbar from "./navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Navbar />
      <main>{children}</main>
    </main>
  );
}
