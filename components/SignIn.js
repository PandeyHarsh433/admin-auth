import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import GoogleIcon from "@mui/icons-material/Google";
import AppleIcon from "@mui/icons-material/Apple";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required!"),
  password: Yup.string()
    .min(8, "Password is too short - should be 8 characters minimum.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character!"
    )
    .required("Required!"),
});

const SignIn = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  if (session) {
    router.replace("/dashboard");
    return null;
  }

  return (
    <div className="signup-container">
      <div className="board">Board.</div>
      <div className="signin-form">
        <h2>Sign In</h2>
        <p>Sign in to your account</p>
        <div className="signup-btn-group">
          <button onClick={() => signIn()}>
            <GoogleIcon />
            Sign in With Google
          </button>
          <button>
            <AppleIcon />
            Sign in With Apple
          </button>
        </div>
        <div className="login-card">
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, isSubmitting, touched }) => (
              <Form>
                <div className="form-control">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email"
                    label="Email"
                    className="input-field"
                  />
                  {errors.email && touched.email ? (
                    <div className="error-message">
                      <ErrorMessage name="email" className="error-message" />
                    </div>
                  ) : null}
                </div>
                <div>
                  <Field
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="input-field"
                  />
                  {errors.password && touched.password ? (
                    <div className="error-message">
                      <ErrorMessage name="password" />
                    </div>
                  ) : null}
                </div>
                <div className="forget">
                  <Link
                    href="https://admin-auth-omega.vercel.app/register"
                    style={{ textDecoration: "none" }}
                  >
                    Forget Password?
                  </Link>
                </div>
                <div>
                  <button
                    className="signin-btn"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    Sign&nbsp;In
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

export default SignIn;
