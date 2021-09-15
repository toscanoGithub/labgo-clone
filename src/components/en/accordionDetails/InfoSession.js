import { Divider, makeStyles, Typography } from "@material-ui/core";
import LabgoForm from "../LabgoForm";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    marginTop: "-50px !important",
    overflow: "hidden",
    "&>h1": {
      fontWeight: 700,
      fontSize: "1.5rem",
      textAlign: "center",
      marginBottom: 20,
    },

    "&>h6.MuiTypography-subtitle1": {
      textAlign: "center",
    },

    "&>h6.MuiTypography-subtitle2": {
      textAlign: "center",
      fontSize: "0.9rem",
      marginTop: 20,
      fontWeight: 600,
    },
  },
}));
function InfoSession() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">FIND OUT MORE</Typography>
      <Typography variant="subtitle1">
        Participate in an information session to find out if you are eligible to
        join our innovative path! To participate in Labgo , you must attend an
        information session. A Zoom link will be sent to you following your
        registration for one of the meetings.
      </Typography>
      <LabgoForm />
    </div>
  );
}

export default InfoSession;
