import React from "react";

const ContactList = props => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={props.contact.imageUrl} />
        </div>
        <div className="col-8">
          <h3>{props.contact.name}</h3>
          <p>phone: {props.contact.phone}</p>
          <p>email: {props.contact.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
