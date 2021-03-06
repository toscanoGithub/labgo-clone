import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Typography from "@material-ui/core/Typography";
import Profile from "./accordionDetails/Profile";
import Admission from "./accordionDetails/Admission";
import LearningSkills from "./accordionDetails/LearningSkils";
import { Divider } from "@material-ui/core";
import Footer from "./Footer";
import InfoSession from "./accordionDetails/InfoSession";
import { FiArrowUpRight } from "react-icons/fi";

const useStyles = makeStyles({
  root: {
    // width: "100% !important",
    // maxWidth: "100%",
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
    padding: "30px 10px 50px 10px ",
    
  },
});

export default function LabgoCards() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion
        style={{ backgroundColor: "#FFFFFF", marginTop: -40 }}
        className={classes.accordion}
      >
        <AccordionSummary
          className={classes.accordionSummary}
          expandIcon={<FiArrowUpRight />}
          aria-label="Expand"
          aria-controls="additional-actions1-content"
          id="additional-actions1-header"
        >
          <Typography variant="4">
            1&nbsp;&nbsp;&nbsp;THE RIGHT PROFILE
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
          expandIcon={<FiArrowUpRight />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <Typography variant="4">
            2&nbsp;&nbsp;&nbsp;RECOGNITION OF PRIOR LEARNING AND SKILLS
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
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
          expandIcon={<FiArrowUpRight />}
          aria-label="Expand"
          aria-controls="additional-actions3-content"
          id="additional-actions3-header"
        >
          <Typography variant="4">
            3&nbsp;&nbsp;&nbsp;CONDITION OF ADMISSIONS
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
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
          expandIcon={<FiArrowUpRight />}
          aria-label="Expand"
          aria-controls="additional-actions2-content"
          id="additional-actions2-header"
        >
          <Typography variant="4">
            4&nbsp;&nbsp;&nbsp;INFORMATION SESSION
          </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.detail}>
          <InfoSession />
        </AccordionDetails>
      </Accordion>

      {/* <Footer /> */}
    </div>
  );
}
