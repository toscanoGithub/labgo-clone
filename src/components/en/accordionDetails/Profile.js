import { List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { BsArrowBarRight, BsArrowBarDown } from "react-icons/bs";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
  root: {
    // marginTop: "-50px !important",
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
  promiseItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",

    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
      justifyContent: "space-around",
      alignItems: "center",
    },

    "&>h4": {
      fontWeight: 700,
      fontSize: "1rem",
      flex: 1,
    },

    "&>h6": {
      flex: 1,
    },
  },
  arrowDown: {
    fontSize: "3rem",
    flex: 1,
    margin: 30,
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  arrowRight: {
    fontSize: "3rem",
    flex: 1,
    margin: 30,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },

  maybe: {
    padding: 10,
    backgroundColor: "#FF7748",
    color: "white",
    textAlign: "center",
    width: "100%",
  },

  //   section
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
}));
function Profile() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h1">WHY CHOOSE LABGO?</Typography>
      <Typography variant="subtitle1">
        Do you have 3 years or more of experience in computer programming, in
        Quebec or abroad? Labgo may be for you!
      </Typography>
      <Typography variant="subtitle2">
        AT THE END OF THE PROGRAM, YOU WILL LEAVE WITH :
      </Typography>
      <List>
        <Divider
          style={{ zIndex: 1000, margin: "10px auto" }}
          variant="fullWidth"
        />
        <ListItem className={classes.promiseItem}>
          <Typography variant="h4">AN EXPERIENCE</Typography>
          <BsArrowBarDown className={classes.arrowDown} />
          <BsArrowBarRight className={classes.arrowRight} />
          <Typography variant="subtitle1">
            A unique experience that recognizes your acquired knowledge and
            skills (RAC)
          </Typography>
        </ListItem>
        <Divider
          style={{ zIndex: 1000, margin: "10px auto" }}
          variant="fullWidth"
        />
        <ListItem className={classes.promiseItem}>
          <Typography variant="h4">A DIPLOMA</Typography>
          <BsArrowBarDown className={classes.arrowDown} />
          <BsArrowBarRight className={classes.arrowRight} />
          <Typography variant="subtitle1">
            An attestation of collegial studies as an Analyst Programmer
          </Typography>
        </ListItem>
        <Divider
          style={{ zIndex: 1000, margin: "10px auto" }}
          variant="fullWidth"
        />
        <ListItem className={classes.promiseItem}>
          <Typography variant="h4">PRIDE</Typography>
          <BsArrowBarDown className={classes.arrowDown} />
          <BsArrowBarRight className={classes.arrowRight} />
          <Typography variant="subtitle1">
            The pride that comes from accomplishing live industry projects
          </Typography>
        </ListItem>
      </List>
      <Divider
        style={{ zIndex: 1000, margin: "10px auto" }}
        variant="fullWidth"
      />
      <Typography className={classes.maybe}>
        Maybe even a job with one of our partner companies!
      </Typography>

      {/* section */}
      <div className={classes.section}>
        <div className={classes.sectionItem1}>
          <Typography variant="h2" className={classes.title}>
            SECTOR OF THE PRESENT AND FUTURE
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            Labgo opens the doors to the current and future economy! Our program
            will allow you to find a job as a programmer, software developer or
            computer analyst.
          </Typography>
          <Typography variant="subtitle1">
            In addition, the current shortage of specialists in the IT field
            drives rapid adoption into stable jobs with good working conditions.
            Your dream job is just around the corner.
          </Typography>
        </div>
        <div className={classes.sectionItem2}>
          <img
            src="http://labgo.ca/wp-content/uploads/2021/08/img-pers.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
