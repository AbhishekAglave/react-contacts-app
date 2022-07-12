import React, { useEffect, useState, useRef } from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

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

export default function EditContactForm(props) {
  const contactList = props.contactList;
  const setContactList = props.setContactList;
  const contactDetails = props.contactDetails;
  const contactId = Number(contactDetails.id);
  const firstNameInput = useRef(null);

  const [firstName, setFirstName] = useState(contactDetails.firstName);
  const [lastName, setLastName] = useState(contactDetails.lastName);
  const [phone, setPhone] = useState(contactDetails.phone);
  const [email, setEmail] = useState(contactDetails.email);
  const [company, setCompany] = useState(contactDetails.company);
  const [title, setTitle] = useState(contactDetails.title);
  const [successMsgClass, setSuccessMsgClass] = useState("hidden");
  const navigate = useNavigate();


  function addContact(event) {
    event.preventDefault();
    const updatedContactList = contactList.filter((contact)=>{
      if(contact.id===contactId){
        contact.firstName= firstName;
        contact.lastName= lastName;
        contact.phone= phone;
        contact.email= email;
        contact.company=company;
        contact.title = title;
      }
      return contact;
    })
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setCompany("");
    setTitle("");
    setContactList(updatedContactList);
    setSuccessMsgClass("success_msg");
    navigate(-1);
  }

  useEffect(() => {
    localStorage.setItem("contactList", JSON.stringify(contactList));
    firstNameInput.current.focus();
  }, [contactList]);

  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <form onSubmit={addContact} autoComplete="off" className="EditContactForm">
        <Typography variant="h5">
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon className="formBackButton" />
          </IconButton>
          Edit Contact Details
        </Typography>
        <CardContent>
          <Typography className={successMsgClass}>
            Contact details updated successfully
            <button
              type="reset"
              className="close"
              onClick={() => {
                setSuccessMsgClass("hidden");
              }}
            >
              🗙
            </button>
          </Typography>
          <div className="name_inputs">
            <TextField
              id="standard-error"
              label="First Name"
              className="textfield"
              required
              onChange={(event) => {
                setFirstName(event.target.value);
                setSuccessMsgClass("hidden");
              }}
              value={firstName}
              ref={firstNameInput}
              autoFocus
            />
            <TextField
              id="standard-error"
              label="Last Name"
              className="textfield"
              onChange={(event) => {
                setLastName(event.target.value);
                setSuccessMsgClass("hidden");
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
                const number = event.target.value;
                if (!isNaN(number)) {
                  setPhone(number);
                  setSuccessMsgClass("hidden");
                }
              }}
              value={phone}
              inputProps={{ maxLength: 10 }}
            />
            <TextField
              id="standard-error"
              label="Email Address"
              className="textfield"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
                setSuccessMsgClass("hidden");
              }}
              value={email}
            />
          </div>
          <div className="company_title_inputs">
            <TextField
              id="standard-error"
              label="Company / Institute"
              className="textfield"
              onChange={(event) => {
                setCompany(event.target.value);
                setSuccessMsgClass("hidden");
              }}
              value={company}
            />
            <TextField
              id="standard-error"
              label="Title / Role"
              className="textfield"
              onChange={(event) => {
                setTitle(event.target.value);
                setSuccessMsgClass("hidden");
              }}
              value={title}
            />
          </div>
        </CardContent>
        <CardActions className="form-actions">
          <Button
            type="reset"
            variant="contained"
            color="primary"
            onClick={() => {
              navigate(-1);
            }}
          >
            Discard
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Save
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
