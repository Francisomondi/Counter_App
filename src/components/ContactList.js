import React from "react";

const ContactList = props => {
  const data = props.contact;
  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <img src={data.imageUrl} />
        </div>
        <div className="col-8">
          <h3>{data.name}</h3>
          <p>phone: {data.phone}</p>
          <p>email: {data.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ContactList;
