import { React } from "react";
import { useRouter } from "next/router";

export default function DetailUser() {
  const router = useRouter();
  console.log(router);

  return (
    <>
      <h1>Detail user {router.query.id}</h1>
    </>
  );
}
