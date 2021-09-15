import { Button, Divider, makeStyles, Typography } from "@material-ui/core";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../../App";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#fff",
    paddingLeft: 30,
    backgroundColor: "#FF7548",
    maxWidth: "100%",
    padding: 30,
  },

  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  top: {
    marginBottom: 20,
    display: "flex",
    justifyContent: "space-between",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
    },
  },

  bio: {
    flex: 0.4,
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
      margin: "10px auto",
    },
  },

  address: {
    flex: 0.2,
    [theme.breakpoints.down("sm")]: {
      margin: "30px auto",
      textAlign: "center",
    },
  },

  social: {
    marginBottom: 20,
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      columnGap: 20,
    },

    "&>a": {
      transition: "all 0.7s ease",
      textDecoration: "none",
      color: "black",
      "&:hover": {
        color: "white",
        transform: "scaleY(1.3)",
      },
    },
  },

  links: {
    [theme.breakpoints.up("md")]: {
      width: "70%",
    },
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "&>a>img": {
      objectFit: "cover",
      [theme.breakpoints.down("md")]: {
        width: 100,
      },
      [theme.breakpoints.down("sm")]: {
        width: 80,
      },
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
      fontWeight: 600,
      fontSize: "1.2rem",
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

  langSelectorControls: {
    border: "1px solid black",
    borderRadius: 10,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    // width: 160,
    "&>button": {
      padding: 10,
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
    transition: "all 700ms ease",
    "&:hover": {
      borderRight: "none",
    },
  },

  frBtn: {
    borderColor: "black",
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderLeft: "1px solid black",
    transition: "all 700ms ease",
    "&:hover": {},
  },
}));
function Footer() {
  const classes = useStyles();
  const history = useHistory();

  const { selectedLanguage, setSelectedLanguage } = useContext(AppContext);

  return (
    <div className={classes.root}>
      <Divider
        style={{ marginTop: -30, marginBottom: 30 }}
        variant="fullWidth"
      />
      <div className={classes.container}>
        <div className={classes.top}>
          <div className={classes.switch}>
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
          <div className={classes.address}>
            <Typography>
              311-4388, rue Saint-Denis Montréal QC H2J 2L1 info@labgo.ca{" "}
            </Typography>
          </div>
          <div className={classes.social}>
            <a target="_blank" href="https://www.facebook.com/lelabgo">
              <Typography>Facebook</Typography>
            </a>

            <a target="_blank" href="https://www.linkedin.com/company/lelabgo">
              <Typography>LinkedIn</Typography>
            </a>

            <a target="_blank" href="https://www.instagram.com/lelabgo/">
              <Typography>Instagram</Typography>
            </a>

            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCYvYN1HLNG8WMlf2v_3nTlg"
            >
              <Typography>Youtube</Typography>
            </a>
          </div>
          <div className={classes.bio}>
            <Typography>
              Le LabGo est une initiative portée par le Collège John-Abbott, le
              Cégep Gérald-Godin et le Collège de Bois-de-Boulogne. Le projet
              est fièrement soutenu par la Ville de Montréal, le Conseil emploi
              métropole, Service Québec de l'Île-de-Montréal et le Ministère de
              l'enseignement supérieur.
            </Typography>
          </div>
        </div>
        <div className={classes.links}>
          <a target="_blank" href="https://www.bdeb.qc.ca/" rel="noreferrer">
            <img
              src="http://labgo.ca/wp-content/uploads/2021/07/logo_bois-de-boulogne-e1626215662735.png"
              alt=""
            />
          </a>

          <a target="_blank" href="https://www.cgodin.qc.ca//" rel="noreferrer">
            <img
              src="http://labgo.ca/wp-content/uploads/2021/07/logo_gg-e1626215654739.png"
              alt=""
            />
          </a>

          <a
            target="_blank"
            href="https://www.johnabbott.qc.ca/"
            rel="noreferrer"
          >
            <img
              src="http://labgo.ca/wp-content/uploads/2021/07/logo_john-abbott-e1626215533189.png"
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
