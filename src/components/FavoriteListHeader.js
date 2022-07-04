import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SortIcon from "@material-ui/icons/Sort";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";

function FavoriteListHeader(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const contactList = props.contactList;
  const setContactList = props.setContactList;

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  const isMenuOpen = Boolean(anchorEl);
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const UnfavoriteAllContacts = () =>{
    const newContactList = contactList.map((contact)=>{
        if(contact.favorite){
            contact.favorite=false;
        }
        return contact;
    })
    setContactList(newContactList);
    setAnchorEl(null);
  }
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={UnfavoriteAllContacts}>Unfavorite All</MenuItem>
    </Menu>
  );

  return (
    <ListItem className="list_header">
      <ListItemIcon>
        <CheckBoxOutlinedIcon />
      </ListItemIcon>
      <div className="name-div">
        <ListItemText primary="Name" />
      </div>
      <div className="phone-div">
        <ListItemText primary="Phone" />
      </div>
      <div className="email-div">
        <ListItemText primary="Email" />
      </div>
      <div className="itembuttons-div">
        <IconButton>
          <SortIcon />
        </IconButton>
        <IconButton aria-haspopup="true" onClick={handleMenuOpen}>
          <MoreVertOutlinedIcon />
        </IconButton>
      </div>
      {renderMenu}
    </ListItem>
  );
}

export default FavoriteListHeader;
