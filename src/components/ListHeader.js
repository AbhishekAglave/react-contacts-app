import React from 'react'
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import SortIcon from "@material-ui/icons/Sort";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";

function ListHeader() {
    return (
      <ListItem className='list_header'>
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
          <IconButton>
            <MoreVertOutlinedIcon />
          </IconButton>
        </div>
      </ListItem>
    );
  }

export default ListHeader;