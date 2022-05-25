import { React } from "react";
import Image from "next/image";

const imageProfile = {
  width: "150px",
  backgroundColor: "red",
};

export default function HandleImage() {
  return (
    <>
      <div className="container text-center">
        <h1>handle image</h1>
        <br />
        <h4>without next image</h4>
        <img src="../vercel.svg" alt="" style={imageProfile} />
        <br />
        <h4>with next image</h4>
        <div style={imageProfile}>
          <Image src="/vercel.svg" alt="" width={100} height={200} />
        </div>
        <hr />
        <Image
          src="/vercel.svg"
          alt=""
          width={100}
          height={200}
          style={imageProfile}
        />
      </div>
    </>
  );
}
