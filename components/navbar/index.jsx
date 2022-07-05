import { React } from "react";
import { Link } from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import Dropdown from "react-bootstrap/Dropdown";
import axios from "../../utils/axios";
import { useEffect } from "react";
import MiniCard from "../miniCard";
import { useState } from "react";

export default function Navbar() {
  const user = useSelector((state) => state.user);
  const data = user.data;
  const [history, setHistory] = useState([]);

  const handleNotif = async () => {
    const result = await axios.get(
      `/transaction/history?page=1&limit=5&filter=WEEK`
    );
    console.log(result.data.data);
    setHistory(result.data.data);
  };

  useEffect(() => {
    handleNotif();
  }, []);

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
                    ? process.env.URL_IMAGE + data.image
                    : process.env.URL_DEFAULT_IMG
                }
                alt=""
                className="navbar-img profile-navbar"
              />
            </div>
            <div className="col navbar-col">
              <p className=" navbar-name">{data.firstName}</p>
              <p className=" navbar-phone">{data.noTelp}</p>
            </div>
            <div className="col-2 pt-2 ps-0">
              <Dropdown>
                <Dropdown.Toggle variant="link" bsPrefix="dropdown">
                  <i className="bi-bell" style={{ color: "black" }}></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  {history.map((item) => (
                    <Dropdown.Item key={item.id}>
                      <MiniCard data={item} />
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
