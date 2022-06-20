import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: 20,
    alignSelf: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(2, 1),
      width: 380,
      height: "100%",
      '@media screen and (max-width: 992px)': {
          width: "100%",
          margin: theme.spacing(1, 1)
      }
    },
  },
}));

export default function NewContactForm(props) {

  const {contactList, setContactList} = props;
  function addContact(){
    setContactList([...contactList, {}])
  }

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <form validate autoComplete="off">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create New Contact
          </Typography>
          <div className="name_inputs">
            <TextField
              id="standard-error"
              label="First Name"
              className="textfield"
              required
            />
            <TextField
              id="standard-error"
              label="Last Name"
              className="textfield"
            />
          </div>
          <div className="mobile_email_inputs">
            <TextField
              id="standard-error"
              label="Phone Number"
              className="textfield"
              type="tel"
              required
            />
            <TextField
              id="standard-error"
              label="Email Address"
              className="textfield"
              type="email"
            />
          </div>
          <div className="company_title_inputs">
            <TextField
              id="standard-error"
              label="Company"
              className="textfield"
            />
            <TextField
              id="standard-error"
              label="Title"
              className="textfield"
            />
          </div>
        </CardContent>
        <CardActions className="save_btn">
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
