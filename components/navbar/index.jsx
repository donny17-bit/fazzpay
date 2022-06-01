import { React } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export default function Navbar() {
  const user = useSelector((state) => state.user);
  // console.log(user.data);
  const data = user.data;
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/747/747376.png";

  return (
    <>
      <nav className="navbar navbar-fazzpay">
        <div className="container ">
          <span className="navbar-title">Zwallet</span>
          <div className="row row-cols-4 navbar-row justify-content-end">
            <div className="col-2">
              <img
                src={
                  data.image
                    ? `https://res.cloudinary.com/dd1uwz8eu/image/upload/v1653276449/${data.image}`
                    : defaultImg
                }
                alt=""
                className="navbar-img "
              />
            </div>
            <div className="col navbar-col">
              <p className=" navbar-name">{data.firstName}</p>
              <p className=" navbar-phone">{data.noTelp}</p>
            </div>
            <div className="col-2  pt-3">
              <i className="bi-bell" style={{ color: "black" }}></i>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
