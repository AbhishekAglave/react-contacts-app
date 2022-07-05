import React, { useState } from "react";
import ContactItem from "./ContactItem";
import ListHeader from "./ListHeader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NoContacts from "./NoContacts";

function SearchList(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;
  const searchKey = props.searchKey;
  const [selectionMode, setSelectionMode] = useState(false);
  return (
    <List>
      <ListHeader
        selectionMode={selectionMode}
        setSelectionMode={setSelectionMode}
        contactList={contactList}
        setContactList={setContactList}
      />
      <Divider />
      <div className="contact-list">
        {contactList.length === 0 ? <NoContacts /> : null}
        {selectionMode
          ? contactList.map((contact) => {
              if (
                contact.firstName.includes(searchKey) ||
                contact.lastName.includes(searchKey)
              ) {
                return (
                  <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.firstName + " " + contact.lastName}
                    phone={contact.phone}
                    email={contact.email}
                    favorite={contact.favorite}
                    selected={contact.selected}
                    selectionMode={selectionMode}
                    contactList={contactList}
                    setContactList={setContactList}
                  />
                );
              } else {
                return null;
              }
            })
          : contactList.map((contact) => {
              if (
                contact.firstName.includes(searchKey) ||
                contact.lastName.includes(searchKey)
              ) {
                return (
                  <ContactItem
                    key={contact.id}
                    id={contact.id}
                    name={contact.firstName + " " + contact.lastName}
                    phone={contact.phone}
                    email={contact.email}
                    favorite={contact.favorite}
                    contactList={contactList}
                    setContactList={setContactList}
                  />
                );
              } else {
                return null;
              }
            })}
      </div>
    </List>
  );
}

export default SearchList;
