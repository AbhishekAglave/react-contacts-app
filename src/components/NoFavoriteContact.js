import React from "react";
import IconButton from "@material-ui/core/IconButton";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import AddIcon from "@material-ui/icons/Add";
import { useNavigate } from "react-router-dom";
import RefreshIcon from "@material-ui/icons/Refresh";

function NoFavoriteContact() {
  const navigate = useNavigate();
  return (
    <ListItem>
      <ListItemIcon></ListItemIcon>
      <div className="name-div">
        <ListItemText primary="No Favorite Contacts Found" />
      </div>
      <div className="phone-div"></div>
      <div className="email-div"></div>
      <div className="itembuttons-div">
        <IconButton
          onClick={() => {
            navigate("/");
          }}
        >
          <RefreshIcon />
        </IconButton>
        <IconButton
          onClick={() => {
            navigate("/");
          }}
        >
          <AddIcon />
        </IconButton>
      </div>
    </ListItem>
  );
}

export default NoFavoriteContact;
