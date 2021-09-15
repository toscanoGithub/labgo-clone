import { Divider, makeStyles, Typography } from "@material-ui/core";
import LabgoForm_FR from "../LabgoForm_FR";

const useStyles = makeStyles((theme) => ({
  root: {
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
      <Typography variant="h1">
        VOULEZ-VOUS AVOIR PLUS D’INFORMATION ?
      </Typography>
      <Typography variant="subtitle1">
        Participez à une rencontre d’information pour savoir si vous êtes
        admissible à suivre notre parcours innovant ! Un lien Zoom vous sera
        transmis suite à votre inscription à l’une des rencontres.
      </Typography>
      <LabgoForm_FR />
    </div>
  );
}

export default InfoSession;
