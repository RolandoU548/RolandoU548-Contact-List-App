import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-light bg-light mb-3 d-flex justify-content-between py-2">
      <Link to="/" className="h1 fs-2 mx-5 text-dark">
        Contacts
      </Link>
      <div className="ml-auto">
        <Link to="/new-contact">
          <button className="btn btn-success mx-5">Add New Contact</button>
        </Link>
      </div>
    </nav>
  );
};
