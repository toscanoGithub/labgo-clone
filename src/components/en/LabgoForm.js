import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  makeStyles,
  Radio,
  RadioGroup,
  Typography,
} from "@material-ui/core";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import TextInput from "../shared/TextInput";
import ScaleLoader from "react-spinners/ScaleLoader";
import { useEffect, useState } from "react";
import CheckboxWrapper from "../shared/FormsUI/Checkbox";
import ButtonWrapper from "../shared/FormsUI/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BiDownArrowCircle } from "react-icons/bi";



const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "100%",
  },

  form: {
    width: "100%",
    border: "1px solid black",
    borderRadius: 30,
    // margin: "0 auto",
    paddingTop: 20,
    overflow: "hidden",
  },

  username: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },

    "&>input": {
      width: "100%",
    },
  },

  info: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },

  accordion: {
    backgroundColor: "#FF7548",
    width: "100%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  accordionSummary: {
    justifySelf: "flex-start",
    width: "100%",
    position: "relative",
  },

  detail: {
    padding: 5,
  },

  radiosWrapper: {
    display: "flex",
    flexDirection: "column",
    // marginLeft: 3,
  },

  formLabel: {
    cursor: "pointer",
    paddingBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    "&>input[type='radio']": {
      width: "calc(18px)",
      height: "calc(18px)",
      marginRight: 8,
      // alignSelf: "flex-start",

      [theme.breakpoints.down("xs")]: {
        width: 15,
        height: 15,
      },
    },

    "&>h6": {
      fontSize: "1rem !important",
      [theme.breakpoints.down("xs")]: {
        fontSize: "0.7rem !important",
      },
    },
  },

  submitBtn: {
    padding: 20,
    backgroundColor: "#FDA487",
    color: "black",
    fontSize: "2rem",
    fontWeight: 700,
    "&:hover": {
      backgroundColor: "#FDA487",
      opacity: 0.9,
    },
  },

  error: {
    color: "red",
    fontWeight: 700,
  },

  toast: {
    display: "grid",
    placeItems: "center",
    "&>.Toastify__toast-theme--light": {
      backgroundColor: "#FFD700",
      color: "black",
    },
  },
}));
function LabgoForm() {
  const classes = useStyles();
  let [loading, setLoading] = useState(null);
  const notify = () => toast("All done, Thank you!");

  const [meetingDate, setMeetingDate] = useState(null);
  const [whereHeardAbout, setWhereHeardAbout] = useState(null);

  const [policy, setPolicy] = useState({
    agree: null,
  });

  const validate = Yup.object({
    lastName: Yup.string().required("The last name is required"),

    firstName: Yup.string().required("The first name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().required("The phone number is required"),
    meetingDate: Yup.string().required("Please choose an option"),
    whereHeardAbout: Yup.string().required("Please choose an option"),
    agree: Yup.boolean(),
  });

  return (
    <Formik
      className={classes.root}
      initialValues={{
        lastName: "",
        firstName: "",
        email: "",
        phone: "",
        meetingDate: "",
        whereHeardAbout: "",
        agree: false,
      }}
      validationSchema={validate}
      onSubmit={async (values, { resetForm, setStatus, setErrors }) => {
        try {
          console.log("------ form data >>>>", values);
          setLoading(true);
          // https://labgo-clone.herokuapp.com/requests
          await fetch("https://labgo-clone.herokuapp.com/requests", {
            mode: "cors",
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              ...values,
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              if (data.success) {
                setLoading(false);
                resetForm({});
                setStatus({ success: true });
                notify();
              }
            })
            .catch((error) => {
              setLoading(false);
              console.log(error.message);
              setStatus({ success: false });
              alert("Something went wrong", error.message);
            });
        } catch (error) {
          setErrors({ submit: error.message });
        }
      }}
    >
      {(formik) => {
        // if (formik.touched.meetingDate && formik.errors.meetingDate) {
        //   console.log(formik.errors.meetingDate);
        // }
        return (
          <div>
            <ToastContainer
              className={classes.toast}
              position="top-center"
              autoClose={2000}
              hideProgressBar={true}
              newestOnTop={false}
              closeButton={false}
            />
            <Form
              action="mailto:pasarela70@hotmail.com"
              method="post"
              enctype="text/plain"
              autocomplete="off"
              className={classes.form}
            >
              <div className={classes.inputs}>
                <div className={classes.username}>
                  <TextInput
                    label="Last name"
                    name="lastName"
                    type="text"
                    emoji="*"
                  />

                  <TextInput
                    label="First name"
                    name="firstName"
                    type="text"
                    emoji="*"
                  />
                </div>

                <div className={classes.info}>
                  <TextInput label="Email" name="email" type="text" emoji="*" />

                  <TextInput label="Phone" name="phone" type="text" emoji="*" />
                </div>

                <Divider style={{ width: "70%", margin: "20px auto" }} light />

                <Accordion elevation={0} className={classes.accordion}>
                  <AccordionSummary
                    expandIcon={<BiDownArrowCircle />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                    className={classes.accordionSummary}
                  >
                    <div className={classes.question}>
                      <Typography variant="subtitle1">
                        Which information meeting would you like to participate
                        in? *
                      </Typography>

                      {formik.touched.meetingDate && formik.errors.meetingDate && (
                        <Typography
                          className={classes.error}
                          variant="subtitle1"
                        >
                          {formik.errors.meetingDate}
                        </Typography>
                      )}
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.detail}>
                    <div
                      className={classes.radiosWrapper}
                      role="group"
                      aria-labelledby="my-radio-group"
                    >
                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="meetingDate"
                          value="Thursday, September 16th - 6PM"
                        />
                        <Typography variant="subtitle1">
                          Thursday, September 16th - 6PM
                        </Typography>
                      </FormLabel>
                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="meetingDate"
                          value="Tuesday, September 14th - 6PM - FRENCH SESSION"
                        />
                        <Typography variant="subtitle1">
                          Tuesday, September 14th - 6PM -
                        </Typography>
                      </FormLabel>
                    </div>
                  </AccordionDetails>
                </Accordion>
                <Divider style={{ width: "70%", margin: "20px auto" }} light />
                {/* ------------------------------------------------------------------------------------------ */}

                <Accordion elevation={0} className={classes.accordion}>
                  <AccordionSummary
                    className={classes.accordionSummary}
                    expandIcon={<BiDownArrowCircle />}
                    aria-label="Expand"
                    aria-controls="additional-actions1-content"
                    id="additional-actions1-header"
                  >
                    <div className={classes.question}>
                      <Typography variant="subtitle1">
                        Where did you hear about Labgo? *
                      </Typography>

                      {formik.touched.meetingDate &&
                        formik.errors.whereHeardAbout && (
                          <Typography
                            className={classes.error}
                            variant="subtitle1"
                          >
                            {formik.errors.whereHeardAbout}
                          </Typography>
                        )}
                    </div>
                  </AccordionSummary>
                  <AccordionDetails className={classes.detail}>
                    <div
                      className={classes.radiosWrapper}
                      role="group"
                      aria-labelledby="my-radio-group"
                    >
                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="John Abbott???s Centre for Continuing Education website"
                        />
                        <Typography variant="subtitle1">
                          John Abbott???s Centre for Continuing Education website
                        </Typography>
                      </FormLabel>
                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="CEGEP Bois-de-Boulogne website"
                        />
                        <Typography variant="subtitle1">
                          CEGEP Bois-de-Boulogne website
                        </Typography>
                      </FormLabel>

                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="CEGEP Bois-de-Boulogne Continuing Education newsletter"
                        />
                        <Typography variant="subtitle1">
                          CEGEP Bois-de-Boulogne Continuing Education newsletter
                        </Typography>
                      </FormLabel>

                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="CEGEP G??rald Godin Website"
                        />
                        <Typography variant="subtitle1">
                          CEGEP G??rald Godin Website
                        </Typography>
                      </FormLabel>

                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="CEGEP G??rald Godin Continuing Education newsletter"
                        />
                        <Typography variant="subtitle1">
                          CEGEP G??rald Godin Continuing Education newsletter
                        </Typography>
                      </FormLabel>

                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="Facebook"
                        />
                        <Typography variant="subtitle1">Facebook</Typography>
                      </FormLabel>

                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="Linkedin"
                        />
                        <Typography variant="subtitle1">Linkedin</Typography>
                      </FormLabel>

                      <FormLabel className={classes.formLabel}>
                        <Field
                          type="radio"
                          name="whereHeardAbout"
                          value="Other"
                        />
                        <Typography variant="subtitle1">Other</Typography>
                      </FormLabel>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Divider style={{ width: "70%", margin: "20px auto" }} light />

                <CheckboxWrapper
                  name="agree"
                  legend="I agree "
                  label="I agree to receive information about the LabGo."
                />
              </div>
              <div style={{ display: "grid", placeItems: "center" }}>
                {loading && (
                  <ScaleLoader
                    component="div"
                    color="#FFD700"
                    loading={loading}
                    size={50}
                  />
                )}
                <ButtonWrapper disabled={loading}>Submit</ButtonWrapper>
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
}

export default LabgoForm;
