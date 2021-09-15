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
    padding: 50,
    width: "100%",
    display: "grid",
    placeItems: "center",
    marginBottom: 50,
  },
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

      <Typography variant="h1">CONDITIONS D’ADMISSION</Typography>

      <Grid container spacing={5}>
        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones1.png"
            alt=""
          />
          <Typography>
            Détenir un diplôme d’études secondaires ou posséder une formation
            jugée pertinente par le Collège
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones2.png"
            alt=""
          />
          <Typography>
            Détenir des connaissances de base en informatique jumelées à une
            expérience de travail, au Québec ou à l’étranger, jugée suffisante
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones3.png"
            alt=""
          />
          <Typography>
            Avoir ses Mathématiques séquence Technico-science de 4e secondaire
            ou l’équivalent
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones4.png"
            alt=""
          />
          <Typography>
            Réussir un test d’informatique spécifique au programme
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones5.png"
            alt=""
          />
          <Typography>
            Réussir un test de français et un test d’anglais
          </Typography>
        </Grid>

        <Grid className={classes.admissionItem} item xs={12} sm={6} md={4}>
          <img
            className={classes.admissionItemImage}
            src="http://labgo.ca/wp-content/uploads/2021/08/desktop_icones6.png"
            alt=""
          />
          <Typography>
            Réussir une entrevue de validation des conditions d’admission
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
