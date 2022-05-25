import { React } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";

export default function Navbar() {
  const router = useRouter();
  const handleLogout = () => {
    router.path("/auth/login");
  };
  return (
    <>
      <h1>hail</h1>
      <Link href="/home">home</Link> |{" "}
      <button onClick={handleLogout}>logout</button>
    </>
  );
}
