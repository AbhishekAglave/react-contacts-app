import React from "react";
import ContactItem from "./ContactItem";
import ListHeader from "./ListHeader";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function ContactList() {
  const contactlist = [
    {
      name: "Abhishek Aglave",
      phone: 8530080493,
      email: "abhishekaglave85@gmail.com",
    },
    {
      name: "Rushikesh Aglave",
      phone: 8530090957,
      email: "rushi@gmail.com",
    },
    {
      name: "Priya Aglave",
      phone: 9834489946,
      email: "priya@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Purushottam Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
    {
      name: "Aglave",
      phone: 7875237367,
      email: "aglave@gmail.com",
    },
  ];
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
