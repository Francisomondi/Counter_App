import React from "react";

const Header = () => {
  return (
    <div>
      <span
        style={{ fontSize: 30, color: "red" }}
        className="badge badge-light"
      >
        zero
      </span>
      <button className="btn btn-secondary cm">increment</button>
    </div>
  );
};

export default Header;
