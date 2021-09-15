import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";
import ButtonMailto from "../ButtonMailTo";
import Carousel from "../Carousel";
import LabgoCards_FR from "./LabgoCards_FR";
import Footer_FR from "./Footer_FR.js";
import Contact from "./contact/Contact";
import Logo from "../shared/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FCF4E5",
    maxWidth: "100%",
    overflow: "hidden",
  },

  labGo: {
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
    marginLeft: 30,
    zoom: 1,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 250,
    "&>button": {
      height: "4rem",
      border: "2px solid black",
      borderRadius: 5,
      fontSize: "4rem",
      fontWeight: 700,
      flex: 1,
      padding: 0,
    },
    "&>h6": {
      fontSize: "4rem",
      fontWeight: 700,
    },
  },

  section: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",

    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },

  sectionItem1: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    flex: 0.7,
    "&>h2": {
      marginBottom: 50,
      fontWeight: 700,
      fontSize: "2rem",

      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        margin: 30,
      },
    },
    "&>h6": {
      color: "#5b5b5b",
      fontSize: "1.1rem",
      lineHeight: 1.5,
      marginBottom: 10,
      [theme.breakpoints.down("sm")]: {
        textAlign: "center",
        padding: 15,
      },
    },
  },

  sectionItem2: {
    padding: 15,
    "&>img": {
      maxWidth: "40vw",
      objectFit: "cover",
      borderRadius: 30,
    },

    [theme.breakpoints.down("sm")]: {
      "&>img": {
        maxWidth: "90vw",
      },
    },
  },

  sectionFindPlace: {
    padding: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&>h2": {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: 700,
      margin: 20,
    },
    "&>h6": {
      textAlign: "center",
      marginBottom: 20,
      maxWidth: 600,
    },
  },
  carousel: { display: "grid", placeItems: "center" },

  labGoContact: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingBottom: 50,
    width: 300,
    "&>a": {
      color: "black",
      border: "2px solid black",
      borderRadius: 5,
      fontSize: "3rem",
      fontWeight: 700,
      flex: 1,
      padding: 0,
      marginLeft: 10,
      textDecoration: "none",
      textAlign: "center",

      "&:hover": {
        backgroundColor: "#FF7748",
      },
    },
    "&>h6": {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
  },

  contactWrapper: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    marginBottom: 70,
  },
}));
function Main_FR() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Logo />
      <div className={classes.section}>
        <div className={classes.sectionItem1}>
          <Typography variant="h2" className={classes.title}>
            UNE IMMERSION DANS LE MONDE DES TI
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            S’inscrire au Labgo, c’est intégrer un espace de simulation
            reproduisant fidèlement le fonctionnement d’une entreprise des
            technologies de l’information (TI) performante, en s’inspirant des
            meilleures pratiques de l’industrie!
          </Typography>
          <Typography variant="subtitle1">
            Consolidez vos compétences techniques en programmation selon la
            méthode du learning by doing, à partir de cas et de projets réels.
          </Typography>
        </div>
        <div className={classes.sectionItem2}>
          <img
            src="http://labgo.ca/wp-content/uploads/2021/07/iStock-973718370-scaled-e1628113037188.jpg"
            alt=""
          />
        </div>
      </div>

      {/* FIND YOUR PLACE */}

      <div className={classes.sectionFindPlace}>
        <Typography variant="h2">ÊTRE À SA PLACE</Typography>
        <Typography variant="subtitle1">
          Faire partie du Labgo, c’est entrer dans un espace bilingue,
          accueillant et ouvert. Vous pourrez y perfectionner vos compétences
          relationnelles et professionnelles du futur.
        </Typography>
        <Typography variant="subtitle1">
          Acquerrez une expérience de travail en sol québécois en œuvrant sur
          des projets en collaboration avec des employeurs partenaires et
          rencontrez des professionnels de l’industrie.
        </Typography>
      </div>

      {/* Carousel */}

      <Carousel />
      {/* contact */}
      <div className={classes.contactWrapper}>
        <Contact />
      </div>

      {/* Cards */}
      <LabgoCards_FR />
      <Footer_FR />
    </div>
  );
}

export default Main_FR;
