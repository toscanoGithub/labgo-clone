import { Button, makeStyles, Typography } from "@material-ui/core";
import { useHistory } from "react-router";
import { motion } from "framer-motion";
import { useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    marginLeft: 10,
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 120,
    "&>button": {
      transition: "all 700ms ease",
      border: "1px solid black",
      borderRadius: 5,
      fontSize: "2rem",
      fontWeight: 700,
      flex: 1,
      padding: 0,
      maxHeight: "2rem",
      backgroundColor: "#FF7548",
      color: "white",

      "&:hover": {
        color: "#FF7548",
      },
    },
    "&>h6": {
      fontSize: "2rem",
      fontWeight: 700,
    },
  },
}));
function Logo() {
  const classes = useStyles();
  const history = useHistory();
  const [rotation, setRotation] = useState(360);
  return (
    <motion.div
      transition={{ duration: 5 }}
      animate={{ rotateY: rotation, }}
      className={classes.root}
    >
      <Typography variant="subtitle1">LAB</Typography>
      <Button onClick={() => history.push("/")}>GO</Button>
    </motion.div>
  );
}

export default Logo;
