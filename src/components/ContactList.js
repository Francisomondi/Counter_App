import React from "react";

const ContactList = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={props.imageUrl} />
        </div>
        <div className="col-8">
          <h3>{props.name}</h3>
          <p>phone: {props.phone}</p>
          <p>email: {props.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
