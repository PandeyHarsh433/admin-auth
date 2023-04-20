import { React, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";

const RegisterForm = () => {
  const SignupSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required!"),
    email: Yup.string().email("Invalid email").required("Required!"),
    password: Yup.string()
      .min(8, "Password is too short - should be 8 characters minimum.")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!"
      )
      .required("Required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required!"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };
  return (
    <div className="signin-container">
      <div className="board">Board.</div>
      <div className="signup-form">
        <h2>Sign Up</h2>
        <p>Create a new account</p>
        <div className="signup-btn-group">
          <button>
            <GoogleIcon />
            Sign in With Google
          </button>
          <button>
            <AppleIcon />
            Sign in With Apple
          </button>
        </div>
        <div className="signup-card">
          <Formik
            initialValues={initialValues}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched, isSubmitting }) => (
              <Form>
                <div className="form-control">
                  <Field
                    name="firstName"
                    id="firstName"
                    placeholder="First Name"
                    type="text"
                    className="input-field"
                  />
                  {errors.firstName && touched.firstName ? (
                    <div className="error-message">
                      <ErrorMessage name="firstName" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control">
                  <Field
                    name="lastName"
                    id="lastName"
                    placeholder="Last Name"
                    type="text"
                    className="input-field"
                  />
                  {errors.lastName && touched.lastName ? (
                    <div className="error-message">
                      <ErrorMessage name="lastName" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control">
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    className="input-field"
                  />
                  {errors.email && touched.email ? (
                    <div className="error-message">
                      <ErrorMessage name="email" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control">
                  <Field
                    name="password"
                    type="password"
                    id="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  {errors.password && touched.password ? (
                    <div className="error-message">
                      <ErrorMessage name="password" />
                    </div>
                  ) : null}
                </div>
                <div className="form-control">
                  <Field
                    name="confirmPassword"
                    type="password"
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="input-field"
                  />
                  {errors.confirmPassword && touched.confirmPassword ? (
                    <div className="error-message">
                      <ErrorMessage name="confirmPassword" />
                    </div>
                  ) : null}
                </div>
                <div>
                  <button
                    className="signup-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign&nbsp;Up
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
