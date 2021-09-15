import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Profile from "./accordionDetails_FR/Profile";
import Admission from "./accordionDetails_FR/Admission";
import LearningSkills from "./accordionDetails_FR/LearningSkils";
import { Divider } from "@material-ui/core";
import Footer_FR from "./Footer_FR";
import InfoSession from "./accordionDetails_FR/InfoSession";

const useStyles = makeStyles({
  root: {
    // width: "100% !important",
    maxWidth: "100%",
    // backgroundColor: "#FF7548",
  },
  accordion: {
    borderTopLeftRadius: "30px !important",
    borderTopRightRadius: "30px !important",
    // padding: "0 20px",
  },

  detail: {
    display: "grid",
    placeItems: "center",
    "&>h2": {
      textAlign: "center",
      fontSize: "2rem",
      fontWeight: 700,
      padding: 20,
    },

    "&>h6": {
      textAlign: "center",
      fontSize: "1rem",
    },
  },

  accordionSummary: {
    padding: "30px 0 50px 10px ",
    // padding: "auto auto 40px auto",
  },
});

export default function LabgoCards_FR() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        style={{ backgroundColor: "#FFFFFF", marginTop: -40 }}
        className={classes.accordion}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <Typography>
            1&nbsp;&nbsp;&nbsp;PROFIL ET PERSPECTIVES D’AVENIR
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <Profile />
        </AccordionDetails>
      </Accordion>
      <Accordion
        style={{
          overflow: "hidden",
          marginTop: -40,
          backgroundColor: "#FCEBE2",
        }}
        className={classes.accordion}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <Typography>
            2&nbsp;&nbsp;&nbsp;RECONNAISSANCE DES COMPÉTENCES
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <LearningSkills />
        </AccordionDetails>
      </Accordion>

      <Accordion
        className={classes.accordion}
        style={{
          overflow: "hidden",
          marginTop: -40,
          backgroundColor: "#FDCCAF",
        }}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <Typography>3&nbsp;&nbsp;&nbsp;CONDITIONS D’ADMISSION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Admission />
        </AccordionDetails>
      </Accordion>

      <Accordion
        elevation={0}
        className={classes.accordion}
        style={{
          overflow: "hidden",
          marginTop: -40,
          backgroundColor: "#FF7548",
        }}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <Typography>4&nbsp;&nbsp;&nbsp;SÉANCES D’INFORMATION</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <InfoSession />
        </AccordionDetails>
      </Accordion>

      {/* <Footer_FR /> */}
    </div>
  );
}
