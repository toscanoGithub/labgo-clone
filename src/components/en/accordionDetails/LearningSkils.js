import { Divider, makeStyles, Typography } from "@material-ui/core";
import arrowImage from "../../shared/images/fleche_large.svg";
import { motion } from "framer-motion";
import { skills } from "../../../data/skills";
import Contact from "../contact/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
    },
    overflow: "hidden",
    "&>h1": {
      fontWeight: 700,
      fontSize: "1.5rem",
      textAlign: "center",
      marginBottom: 20,
    },
  },

  arrowWrapper: {
    display: "grid",
    placeItems: "center",
    width: "100%",
    marginTop: 50,

    "&>h4": {
      marginTop: 50,
      marginBottom: 20,
      fontWeight: 700,
      fontSize: "1rem",
    },
  },

  arrowDown: {
    width: 100,
    objectFit: "cover",
  },

  skillWrapper: {
    display: "flex",
    flexDirection: "column",
  },

  skill: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 20,
  },

  skillIndex: {
    fontWeight: 700,
    fontSize: "1.2rem",
    marginRight: 50,
  },

  contactWrapper: {
    margin: "50px auto",
    width: "100%",
    display: "grid",
    placeItems: "center",
  },
}));
function LearningSkills() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Typography variant="h1">YOUR RECOGNIZED SKILLS</Typography>
      <Typography variant="subtitle1">
        Labgo recognizes your knowledge and skills and supplements your
        experience with training based on the reality of the Quebec labor
        market.
      </Typography>

      <div className={classes.arrowWrapper}>
        <motion.img
          transition={{ duration: 4 }}
          animate={{ rotateZ: 90 }}
          className={classes.arrowDown}
          src={arrowImage}
          alt=""
        />

        <Typography variant="h4">HERE IS THE SKILLS GRID: </Typography>
      </div>
      <div className={classes.skills}>
        {skills &&
          skills.map((skill, index) => {
            return (
              <div className={classes.skillWrapper}>
                <Divider dark />
                <div className={classes.skill}>
                  <Typography className={classes.skillIndex} variant="h4">
                    {" "}
                    {index}
                  </Typography>
                  <Typography className={classes.skillText} variant="subtitle1">
                    {" "}
                    {skill}
                  </Typography>
                </div>
                <Divider dark />
              </div>
            );
          })}
      </div>
      <div className={classes.contactWrapper}>
        <Contact />
      </div>
    </div>
  );
}

export default LearningSkills;
