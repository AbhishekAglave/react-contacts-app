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
    <ListItem button>
      <ListItemIcon>
        <AccountCircleOutlinedIcon />
      </ListItemIcon>
      <div className="name-div">
        <ListItemText primary={props.name} />
      </div>
      <div className="phone-div">
        <a href={"tel:" + props.phone}>
          <ListItemText primary={props.phone} />
        </a>
      </div>
      <div className="email-div">
        <a href={"mailto:" + props.email}>
          <ListItemText primary={props.email} />
        </a>
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
  );
}

export default ContactItem;
