import React from "react";
import ContactItem from "./ContactItem";
import ListHeader from "./ListHeader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NoContacts from "./NoContacts";

function ContactList(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;
  return (
      <List>
        <ListHeader contactList={contactList} setContactList={setContactList} />
        <Divider />
        <div className="contact-list">
          {contactList.length===0?<NoContacts/>:null}
          {contactList.map((contact) => {
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
          })}
        </div>
      </List>
  );
}

export default ContactList;
