import React from "react";
import ContactItem from "./ContactItem";
import FavoriteListHeader from "./FavoriteListHeader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import NoFavoriteContact from "./NoFavoriteContact";

function FavoriteContactList(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;
  let noFavsFound = true;
  return (
    <List>
      <FavoriteListHeader
        contactList={contactList}
        setContactList={setContactList}
      />
      <Divider />
      <div className="contact-list">
        {contactList.map((contact) => {
          if (contact.favorite) {
            noFavsFound=false;
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
            }
            return false;
          })}
          {noFavsFound ? <NoFavoriteContact /> : null}
      </div>
    </List>
  );
}

export default FavoriteContactList;
