import React, { useState } from "react";
import ContactItem from "./ContactItem";
import ListHeader from "./ListHeader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function ContactList(props) {
  const { contactlist } = props;
  return (
    <List>
      <ListHeader />
      <Divider />
      <div className="contact-list">
        {contactlist.map((contact) => {
          return (
            <ContactItem
              name={contact.name}
              phone={contact.phone}
              email={contact.email}
            />
          );
        })}
      </div>
    </List>
  );
}

export default ContactList;
