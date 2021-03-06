import { List, ListItem, makeStyles, Typography } from "@material-ui/core";
import { BsArrowBarRight, BsArrowBarDown } from "react-icons/bs";
import Divider from "@material-ui/core/Divider";

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
      <Typography variant="h1">POURQUOI CHOISIR LE LABGO?</Typography>
      <Typography variant="subtitle1">
        Vous avez 3 ans et plus d???exp??rience en programmation informatique, au
        Qu??bec ou ?? l?????tranger? Le Labgo est peut-??tre pour vous !
      </Typography>
      <Typography variant="subtitle2">
        ?? L???ISSUE DU PARCOURS, VOUS REPARTIREZ AVEC :
      </Typography>
      <List>
        <Divider
          style={{ zIndex: 1000, margin: "10px auto" }}
          variant="fullWidth"
        />
        <ListItem className={classes.promiseItem}>
          <Typography variant="h4">UNE EXP??RIENCE</Typography>
          <BsArrowBarDown className={classes.arrowDown} />
          <BsArrowBarRight className={classes.arrowRight} />
          <Typography variant="subtitle1">
            Une exp??rience unique qui reconna??t vos acquis et vos comp??tences
            (RAC)
          </Typography>
        </ListItem>
        <Divider
          style={{ zIndex: 1000, margin: "10px auto" }}
          variant="fullWidth"
        />
        <ListItem className={classes.promiseItem}>
          <Typography variant="h4">UN DIPL??ME</Typography>
          <BsArrowBarDown className={classes.arrowDown} />
          <BsArrowBarRight className={classes.arrowRight} />
          <Typography variant="subtitle1">
            Une attestation d?????tudes coll??giales en Analyste programmeur
          </Typography>
        </ListItem>
        <Divider
          style={{ zIndex: 1000, margin: "10px auto" }}
          variant="fullWidth"
        />
        <ListItem className={classes.promiseItem}>
          <Typography variant="h4">LA FIERT??</Typography>
          <BsArrowBarDown className={classes.arrowDown} />
          <BsArrowBarRight className={classes.arrowRight} />
          <Typography variant="subtitle1">
            La fiert?? d???avoir r??alis?? de nombreux projets de d??veloppement
          </Typography>
        </ListItem>
      </List>
      <Divider
        style={{ zIndex: 1000, margin: "10px auto" }}
        variant="fullWidth"
      />
      <Typography className={classes.maybe}>
        Peut-??tre m??me un emploi au sein de l???une de nos entreprises partenaires
        !
      </Typography>

      {/* section */}
      <div className={classes.section}>
        <div className={classes.sectionItem1}>
          <Typography variant="h2" className={classes.title}>
            UN DOMAINE D???AVENIR
          </Typography>
          <Typography variant="subtitle1" className={classes.text}>
            Le Labgo vous ouvre les portes ?? de grandes perspectives d???avenir!
            Notre parcours vous permettra de trouver un emploi comme programmeur
            ou programmeuse, d??veloppeur ou d??veloppeuse logiciel ou analyste en
            informatique.
          </Typography>
          <Typography variant="subtitle1">
            De plus, la p??nurie actuelle de sp??cialistes dans le domaine des TI
            favorise l???int??gration rapide dans des emplois stables avec de
            bonnes conditions de travail. Votre emploi de r??ve est ?? port??e de
            main.
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
