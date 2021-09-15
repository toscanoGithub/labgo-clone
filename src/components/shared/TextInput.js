import React from "react";
import { useField, ErrorMessage } from "formik";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  textInput: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&>label": {
      flex: 1,
      textAlign: "right",
      color: "white",
      fontWeight: 700,
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
  },
  inputErrorWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    "&>input": {
      textAlign: "center",
      marginLeft: 20,
      marginRight: 20,
      width: 400,
      border: "none",
      borderRadius: 20,
      backgroundColor: "transparent",
      padding: 10,
      outline: "none",
      borderBottom: "1px solid black",
      color: "white",
      "&:hover": {
        borderColor: "red",
      },



      "&::placeholder": {
        color: "mintcream",
        fontStyle: "italic",
      },

      [theme.breakpoints.down("md")]: {
        width: 240,
      },

      [theme.breakpoints.up("md")]: {
        width: 400,
      },

      [theme.breakpoints.down("xs")]: {
        width: 380,
      },
    },
  },

  errorMessage: {
    color: "red",
    width: "100%",
    padding: 10,
    fontSize: "0.8rem",
    textAlign: "center",
    // fontWeight: 700,
  },
}));
const TextInput = ({ label, ...props }) => {
  const classes = useStyles();
  const [field, meta] = useField(props);

  return (
    <>
      <div className={classes.textInput}>
        <label htmlFor={field.name}>{label}</label>
        <div className={classes.inputErrorWrapper}>
          <input
            autocomplete="off"
            {...field}
            {...props}
            placeholder={` ${label} ${props.emoji}`}
          />

          <div className={classes.errorMessage}>
            <ErrorMessage name={field.name} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TextInput;
