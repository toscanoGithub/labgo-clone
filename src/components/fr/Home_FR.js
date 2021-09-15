import { Button, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { AppContext } from "../../App";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh !important",
    backgroundColor: "#FF7648",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "space-between",
    overflow: "hidden",
  },

  header: {
    display: "flex",
    maxWidth: "100%",
    justifyContent: "space-between",
    alignItems: " center",
    padding: 20,
  },

  textImmerse: {
    fontWeight: 700,
    fontSize: "1rem",
  },

  langSelectorControls: {
    border: "1px solid black",
    borderRadius: 10,
    marginTop: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: 170,
    "&>button": {
      padding: 20,
      flex: 1,
      "&:hover": {
        backgroundColor: "#F1F3F4",
      },
    },
  },

  enBtn: {
    borderColor: "black",
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    borderRight: "1px solid black",
    transition: "all 0.8s ease",
    "&:hover": {
      borderRight: "none",
    },
  },

  frBtn: {
    borderColor: "black",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: "1px solid black",
    "&:hover": {},
  },

  labGo: {
    zoom: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    maxWidth: 500,
    margin: "0 auto",
    "&>button": {
      height: "5rem",
      border: "3px solid black",
      borderRadius: 15,
      fontSize: "5rem",
      fontWeight: 700,
      flex: 1,
      minWidth: 150,
      padding: 0,
    },
    "&>h6": {
      fontSize: "5rem",
      fontWeight: 700,
    },

    [theme.breakpoints.up("md")]: {
      zoom: 1.6,
    },
  },

  footer: {
    width: "100%",
    textAlign: "center",
    padding: 10,
  },
}));
function Home_FR() {
  const classes = useStyles();
  const { selectedLanguage, setSelectedLanguage } = useContext(AppContext);
  const history = useHistory();
  const [bounceButton, setBounceButton] = useState(false);
  const [triggered, setTriggered] = useState(false);
  useEffect(() => {
    console.log("-------- selected language ---------", selectedLanguage);
    setTimeout(() => {
      setTriggered(true);
      setTimeout(() => {
        setTriggered(false);
        history.push("/main");
      }, 500);
    }, 4000);
  }, [triggered === false]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Typography className={classes.textImmerse} variant="subtitle1">
          Espace <br /> d'apprentissage <br /> en TI
        </Typography>
        <div className={classes.langSelectorControls}>
          <Button
            style={{
              backgroundColor: `${
                selectedLanguage === "en" ? "#FCF4E5" : "transparent"
              }`,
            }}
            onClick={() => setSelectedLanguage("en")}
            className={classes.enBtn}
            variant="outlined"
          >
            En
          </Button>
          <Button
            style={{
              backgroundColor: `${
                selectedLanguage === "fr" ? "#FCF4E5" : "transparent"
              }`,
            }}
            onClick={() => setSelectedLanguage("fr")}
            className={classes.frBtn}
            variant="outlined"
          >
            Fr
          </Button>
        </div>
      </div>

      <div className={classes.labGo}>
        <Typography variant="subtitle1">LAB</Typography>
        <Button
          style={{
            transform: `${triggered ? "scale(1.04)" : "scale(1)"}`,
            backgroundColor: `${triggered ? "#F1F3F4" : "transparent"}`,
          }}
          onClick={() => history.push("/main")}
        >
          GO
        </Button>
      </div>
      <footer className={classes.footer}>
        <Typography variant="subtitle1">
          311-4388 boulevard Saint-Denis, Montréal QC H2J 2L1
        </Typography>
      </footer>
    </div>
  );
}

export default Home_FR;
