import React from "react";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@material-ui/core";
import { useField, useFormikContext } from "formik";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginLeft: 10,
    "& .MuiTypography-body1": {
      fontSize: "0.8rem !important",
      fontWeight: 700,
    },
  },

  checkbox: {
    color: "white",
  },
}));

const CheckboxWrapper = ({ name, label, legend, agree, ...otherProps }) => {
  const classes = useStyles();
  const { setFieldValue } = useFormikContext();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [field, meta] = useField(name);

  const handleChange = (evt) => {
    const { checked } = evt.target;
    setFieldValue(name, checked);
  };
  const configCheckbox = {
    ...field,
    onChange: handleChange,
    color: "primary",
  };

  const configFormControl = {};
  if (meta && meta.touched && meta.error) {
    configFormControl.error = true;
  }

  return (
    <FormControl {...configFormControl} className={classes.root}>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox className={classes.checkbox} {...configCheckbox} />
          }
          label={label}
        />
      </FormGroup>
      {/* <FormLabel component="legend">{legend}</FormLabel> */}
    </FormControl>
  );
};

export default CheckboxWrapper;
