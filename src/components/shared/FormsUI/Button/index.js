import React, { Children } from "react";
import { Button } from "@material-ui/core";
import { useFormikContext } from "formik";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    padding: 20,
    backgroundColor: "#FDA487",
    color: "black",
    fontSize: "2rem",
    fontWeight: 700,
    marginTop: 20,
    "&:hover": {
      backgroundColor: "#FDA487",
      opacity: 0.9,
    },
  },
}));

const ButtonWrapper = ({ children, ...otherProps }) => {
  const classes = useStyles();

  const { submitForm } = useFormikContext();

  const handleSubmit = () => {
    submitForm();
  };

  const configButton = {
    variant: "contained",
    color: "primary",
    fullWidth: true,
    onClick: handleSubmit,
  };

  return (
    <Button disabled={otherProps.disabled} className={classes.submitBtn} {...configButton}>
      {children}
    </Button>
  );
};

export default ButtonWrapper;
