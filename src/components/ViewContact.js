import React from "react";
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
    paddingRight: 40,
    alignSelf: "center",
    "& .MuiTypography-root": {
      margin: theme.spacing(2, 1),
      width: 380,
      height: "100%",
      "@media screen and (max-width: 992px)": {
        width: "100%",
        margin: theme.spacing(1, 1),
      },
    },
  },
}));

export default function ViewContact(props) {
  const contactDetails = props.contactDetails;
  const navigate = useNavigate();
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <form autoComplete="off" className="newContactForm">
        <Typography variant="h5">
          <IconButton
            onClick={() => {
              navigate(-1);
            }}
          >
            <ArrowBackIcon className="formBackButton" />
          </IconButton>
          Contact Details
        </Typography>
        <CardContent>
          <div className="name_inputs">
            <Typography className="textfield" variant="caption">
              First Name
            </Typography>
            <Typography className="textfield" variant="subtitle1">
              {contactDetails.firstName}
            </Typography>
            <Typography className="textfield" variant="caption">
              Last Name
            </Typography>
            <Typography className="textfield" variant="subtitle1">
              {contactDetails.lastName}
            </Typography>
          </div>
          <div className="mobile_email_inputs">
            <Typography className="textfield" variant="caption">
              Phone
            </Typography>
            <Typography className="textfield" variant="subtitle1">
              <a
                style={{ textDecoration: "none" }}
                href={`tel:${contactDetails.phone}`}
              >
                {contactDetails.phone}
              </a>
            </Typography>
            <Typography className="textfield" variant="caption">
              Email
            </Typography>
            <Typography className="textfield" variant="subtitle1">
              <a
                style={{ textDecoration: "none" }}
                href={`mailto:${contactDetails.email}`}
              >
                {contactDetails.email}
              </a>
            </Typography>
          </div>
        </CardContent>
        <CardActions className="form-actions">
          <Button variant="contained" color="primary">
            Edit
          </Button>
        </CardActions>
      </form>
    </Card>
  );
}
