import { Grid, makeStyles, Typography } from "@material-ui/core";
import Contact from "../contact/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    "&>h1": {
      fontSize: "2rem",
      fontWeight: 700,
      textAlign: "center",
      margin: "70px auto",
    },
  },
  header: {
    width: "100%",
    display: "grid",
    placeItems: "center",
    "&>img": {
      width: "100%",
      objectFit: "cover",
      borderRadius: 30,
      [theme.breakpoints.up("md")]: {
        width: "70%",
      },
    },
  },

  admissionItemImage: {
    maxWidth: 160,
    objectFit: "cover",
    padding: 13,
  },

  admissionItem: {
    display: "grid",
    placeItems: "center",
  },

  contactWrapper: {
    marginTop: 50,
    width: "100%",
    display: "grid",
    placeItems: "center",
    marginBottom: 50,
  },

  conditionItemText: {
    textAlign:"center",
  }
}));
function Admission() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <img
          src="http://labgo.ca/wp-content/uploads/2021/07/pexels-fauxels-3184300-2048x1365.jpg"
          alt=""
        />
      </div>

      <Typography variant="h1">CONDITIONS OF ADMISSION</Typography>

      <Grid container spacing={5}>
        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones1.png"
            alt=""
          />
          <Typography className={classes.conditionItemText} variant="subtitle1">
            Hold a high school diploma or have training deemed relevant by the
            College
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones2.png"
            alt=""
          />
          <Typography className={classes.conditionItemText} variant="subtitle1">
            Possess basic computer skills combined with work experience, in
            Quebec or abroad, deemed sufficient
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones3.png"
            alt=""
          />
          <Typography className={classes.conditionItemText} variant="subtitle1">
            Secondary 4 Mathematics/technical/sciences or equivalent
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones4.png"
            alt=""
          />
          <Typography className={classes.conditionItemText} variant="subtitle1">Pass a computer test specific to the program</Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones5.png"
            alt=""
          />
          <Typography className={classes.conditionItemText} variant="subtitle1">Pass a French test and an English test</Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones6.png"
            alt=""
          />
          <Typography className={classes.conditionItemText} variant="subtitle1">
            Pass an interview to validate the admission requirements
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.contactWrapper}>
        <Contact />
      </div>
    </div>
  );
}

export default Admission;
