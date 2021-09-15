import { Button, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import ButtonMailto from "../ButtonMailTo";
import Carousel from "../Carousel";
import LabgoCards from "./LabgoCards";
import Footer from "./Footer";
import Contact from "./contact/Contact";
import Logo from "../shared/Logo";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#FCF4E5",
    minWidth: "100%",
    overflow: "hidden",
  },

  labGo: {
    // [theme.breakpoints.down("xs")]: {
    //   display: "none",
    // },
    marginLeft: 10,
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
  carousel: { width:"100%", margin:"0 auto", },

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
      fontSize: "3rem",
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
function Main() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Logo />

      <div className={classes.section}>
        <div className={classes.sectionItem1}>
          <Typography variant="h2" className={classes.title}>
            IMMERSE YOURSELF IN THE WORLD OF IT
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            Register for Labgo and join a simulation space that faithfully
            reproduces the operation of a high-performance information
            technology (IT) company that follows the best practices in the
            industry!
          </Typography>
          <Typography variant="subtitle1">
            Reinforce your technical programming skills using the learning by
            doing method , based on real cases and projects in collaboration
            with local industry.
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
        <Typography variant="h2">FIND YOUR PLACE</Typography>
        <Typography variant="subtitle1">
          Labgo is a bilingual, welcoming, and open space. It is the perfect
          environment to improve your interpersonal and professional skills for
          the future. professionals.
        </Typography>
        <Typography variant="subtitle1">
          Gain work experience in Quebec by working on projects in collaboration
          with employment partners, and meet industry.
        </Typography>
      </div>

      {/* <div className={classes.carousel}> */}
        {/* Carousel */}

        <Carousel />
      {/* </div> */}
      {/* contact */}
      <div className={classes.contactWrapper}>
        <Contact />
      </div>

      {/* Cards */}
      <LabgoCards />

      <Footer />
    </div>
  );
}

export default Main;
