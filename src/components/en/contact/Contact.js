import { Button, makeStyles, Typography } from "@material-ui/core";
import ButtonMailto from "../../ButtonMailTo";

const useStyles = makeStyles((theme) => ({
  root: {
    border: "1px solid black",
    borderRadius: 5,
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    height: 60,
    "&>h4": {
      fontWeight: 700,
      fontSize: "1.3rem",
      flex: 1,
      textAlign: "center",
      padding: 8,
    },
    "&>a": {
      textDecoration: "none",
color:"black",
      flex: 1,
      height: "100%",
      borderRadius: 0,
      borderLeft: "1px solid black",
      fontSize: "3rem",
      fontWeight: 700,

      "&:hover": {
        backgroundColor: "#FF7548",
      },
    },
  },
}));
function Contact() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h4">
        Contact
        <br /> LabGo
      </Typography>
      <ButtonMailto label="GO" mailto="mailto:pasarela70@hotmail.com" />
    </div>
  );
}

export default Contact;
