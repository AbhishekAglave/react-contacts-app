import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import ArchiveRoundedIcon from '@material-ui/icons/ArchiveRounded';
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button>
          <ListItemText
            primary={
              <span
                style={{
                  position: "relative",
                  fontSize: 25,
                  color: "#3f51b5",
                }}
              >
                Contacts
              </span>
            }
          />
          <IconButton>
            <ArrowBackIosOutlinedIcon fontSize="small" />
          </IconButton>
        </ListItem>
        <Divider />
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          <ListItem button>
            <ListItemIcon>
              <HomeRoundedIcon/>
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
        </Link>
        <ListItem button>
          <ListItemIcon>
            <FavoriteRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Favorites" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ArchiveRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Other Contacts" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <DeleteRoundedIcon />
          </ListItemIcon>
          <ListItemText primary="Trash" />
        </ListItem>
      </List>
    </div>
  );

  return (
    <div>
      {["left"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(anchor, true)}
          >
            <MenuIcon />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}
