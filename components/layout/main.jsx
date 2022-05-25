import { React } from "react";
import Navbar from "../navbar";

export default function MainLayout(props) {
  return (
    <div>
      <main>{props.children}</main>
    </div>
  );
}
