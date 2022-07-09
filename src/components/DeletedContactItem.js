import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import RefreshIcon from "@material-ui/icons/Refresh";

function DeletedContactItem(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;
  const trashList = props.trashList;
  const setTrashList = props.setTrashList;

  function deleteContactItem(id) {
    const newContactList = trashList.filter((contact) => {
      return contact.id !== id;
    });
    setTrashList(newContactList);
  }
  function restoreContactItem(id) {
    const contactsToBeRestored = [];
    const newTrashList = trashList.filter((contact)=>{
      if(contact.id===id){
        contactsToBeRestored.push(contact);
        return false;
      }
      return contact;
    });
    setContactList([...contactList, ...contactsToBeRestored])
    setTrashList(newTrashList);
  }
  function select(id) {
    const newContactList = trashList.map((contact) => {
      if (contact.id === id) {
        contact.selected
          ? (contact.selected = false)
          : (contact.selected = true);
      }
      return contact;
    });
    setTrashList(newContactList);
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
        <ListItemText primary={props.name} />
      </div>
      <div className="phone-div">
        <ListItemText primary={props.phone} />
      </div>
      <div className="email-div">
        <ListItemText primary={props.email} />
      </div>
      <div className="itembuttons-div">
        <IconButton
          onClick={() => {
            restoreContactItem(props.id);
          }}
        >
          {<RefreshIcon/>}
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

export default DeletedContactItem;
