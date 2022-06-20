import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";

function ContactItem(props) {
  return (
    <>
      <ListItem button>
        <ListItemIcon>
          <AccountCircleOutlinedIcon />
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
          <IconButton>
            <FavoriteBorderOutlinedIcon />
          </IconButton>
          <IconButton>
            <EditOutlinedIcon />
          </IconButton>
        </div>
      </ListItem>
    </>
  );
}

export default ContactItem;
