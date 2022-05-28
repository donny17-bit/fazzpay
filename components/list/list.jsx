import React from "react";
import Link from "next/link";

function List(props) {
  const { image, title, content, others } = props.data;
  return (
    <div className="row border m-0 p-3 mt-4 register-list">
      {image ? (
        <div className="col col-2 p-0 transfer-img">
          <img src={image} alt="" />
        </div>
      ) : (
        ""
      )}
      <div className="col pt-1 ">
        <p className="mb-2 transfer-phone">{title}</p>
        <p className="m-0 transfer-name">{content}</p>
      </div>
      <div className="col ps-0 pt-3 text-end pe-0 ">
        {others == "Link" ? (
          <Link href="#">
            <a className="link-list">Manage</a>
          </Link>
        ) : others == "Trash" ? (
          <button className="btn btn-link p-0">
            <i className=" bi bi-trash link-icon"></i>
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default List;
