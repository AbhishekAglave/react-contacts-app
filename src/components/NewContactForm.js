import React, { useEffect, useState } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { borderRadius, padding } from "@mui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    padding: 20,
    alignSelf: "center",
    "& .MuiTextField-root": {
      margin: theme.spacing(2, 1),
      width: 380,
      height: "100%",
      "@media screen and (max-width: 992px)": {
        width: "100%",
        margin: theme.spacing(1, 0),
      },
    },
  },
}));

export default function NewContactForm(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState();
  const [title, setTitle] = useState();
  const [successMsgClass, setSuccessMsgClass] = useState('hidden');

  function addContact(event) {
    event.preventDefault();
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
    };
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setTitle("");
    setContactList([...contactList, newContact]);
    setSuccessMsgClass('success_msg');
  }

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
  }, [contactList]);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <form onSubmit={addContact} validate autoComplete="off">
        <CardContent>
          <Typography variant="h5" gutterBottom>
            Create New Contact
          </Typography>
          <Typography className={successMsgClass}>
            Contact saved successfully
            <button type="reset" className="close"
             onClick={()=>{
              setSuccessMsgClass('hidden');
             }}
            
            >🗙</button>
          </Typography>
          <div className="name_inputs">
            <TextField
              id="standard-error"
              label="First Name"
              className="textfield"
              required
              onChange={(event) => {
                setFirstName(event.target.value);
              }}
              value={firstName}
            />
            <TextField
              id="standard-error"
              label="Last Name"
              className="textfield"
              onChange={(event) => {
                setLastName(event.target.value);
              }}
              value={lastName}
            />
          </div>
          <div className="mobile_email_inputs">
            <TextField
              id="standard-error"
              label="Phone Number"
              className="textfield"
              type="tel"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
              value={phone}
            />
            <TextField
              id="standard-error"
              label="Email Address"
              className="textfield"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
              value={email}
            />
          </div>
          <div className="company_title_inputs">
            <TextField
              id="standard-error"
              label="Company"
              className="textfield"
              onChange={(event) => {
                setCompany(event.target.value);
              }}
              value={company}
            />
            <TextField
              id="standard-error"
              label="Title"
              className="textfield"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
              value={title}
            />
          </div>
        </CardContent>
        <CardActions className="form-actions">
          <Link to="/" style={{ textDecoration: "none" }}>
            <Button type="reset" variant="contained" color="primary">
              Discard
            </Button>
          </Link>
          {/* <Link to="/" style={{ textDecoration: "none" }}> */}
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
          {/* </Link> */}
        </CardActions>
      </form>
    </Card>
  );
}
