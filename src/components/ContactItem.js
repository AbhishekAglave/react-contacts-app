import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
// import { useNavigate } from "react-router-dom";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";

function ContactItem(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;
  const trashList = props.trashList;
  const setTrashList = props.setTrashList;
  // const navigate = useNavigate();

  function deleteContactItem(id) {
    const newContactList = contactList.filter((contact) => {
      if(contact.id===id){
        moveToTrash(contact);
      }
      return contact.id !== id;
    });
    setContactList(newContactList);
  }
  function moveToTrash(contact){
    setTrashList([...trashList, contact]);
  }
  function makeFavoriteUnfavorite(id) {
    const newContactList = contactList.map((contact) => {
      if (contact.id === id) {
        contact.favorite
          ? (contact.favorite = false)
          : (contact.favorite = true);
      }
      return contact;
    });
    setContactList(newContactList);
  }
  function select(id) {
    const newContactList = contactList.map((contact) => {
      if (contact.id === id) {
        contact.selected
          ? (contact.selected = false)
          : (contact.selected = true);
      }
      return contact;
    });
    setContactList(newContactList);
  }
  function viewContact() {
    // navigate("/ViewContact");
  }

  return (
    <ListItem button>
      <ListItemIcon>
        {props.selectionMode ? (
          props.selected ? (
            <CheckBoxOutlinedIcon
              onClick={() => {
                select(props.id);
              }}
            />
          ) : (
            <CheckBoxOutlineBlankIcon
              onClick={() => {
                select(props.id);
              }}
            />
          )
        ) : (
          <AccountCircleOutlinedIcon />
        )}
      </ListItemIcon>
      <div className="name-div">
        <ListItemText primary={props.name} onClick={viewContact} />
      </div>
      <div className="phone-div">
        <ListItemText primary={props.phone} onClick={viewContact} />
      </div>
      <div className="email-div">
        <ListItemText primary={props.email} onClick={viewContact} />
      </div>
      <div className="itembuttons-div">
        <IconButton
          onClick={() => {
            makeFavoriteUnfavorite(props.id);
          }}
        >
          {props.favorite ? <FavoriteIcon /> : <FavoriteBorderOutlinedIcon />}
        </IconButton>
        <IconButton
          onClick={() => {
            deleteContactItem(props.id);
          }}
        >
          <DeleteOutlinedIcon />
        </IconButton>
      </div>
    </ListItem>
  );
}

export default ContactItem;
