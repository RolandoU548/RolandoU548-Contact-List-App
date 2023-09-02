import React, { useContext } from "react";
import "../../styles/home.css";
import { Contact } from "../component/Contact";
import { Context } from "../store/appContext";

export const Home = () => {
  const { store, actions } = useContext(Context);
  const contacts = store.contacts;

  if (contacts.length === 0)
    return <h2 className="h2 text-center">No Contacts</h2>;

  return (
    <>
      <div className="container">
        {actions.formatData(contacts).map((contact, index) => (
          <Contact
            full_name={contact.full_name}
            address={contact.address}
            phone={contact.phone}
            email={contact.email}
            id={contact.id}
            key={index + 1}
          />
        ))}
      </div>
      <div style={{ height: "20px" }}></div>
    </>
  );
};
