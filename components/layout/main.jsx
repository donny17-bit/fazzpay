import { React } from "react";
import Navbar from "../navbar";

export default function MainLayout({ children }) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
