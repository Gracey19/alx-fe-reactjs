// src/components/formikForm.js
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";

const RegistrationSchema = Yup.object().shape({
  username: Yup.string().trim().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().min(6, "Min 6 characters").required("Password is required")
});

function FormikForm() {
  const [status, setStatus] = useState(null);

  return (
    <div>
      <h2>Formik Registration Form</h2>
      <Formik
        initialValues={{ username: "", email: "", password: "" }}
        validationSchema={RegistrationSchema}
        onSubmit={async (values, { resetForm, setSubmitting }) => {
          setStatus(null);
          try {
            const res = await fetch("https://reqres.in/api/register", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(values)
            });

            if (!res.ok) {
              setStatus({ type: "error", message: "Registration failed (mock API)." });
              setSubmitting(false);
              return;
            }

            const data = await res.json();
            setStatus({ type: "success", message: `Registered! Mock token: ${data?.token || "N/A"}` });
            resetForm();
          } catch (err) {
            setStatus({ type: "error", message: "Network error. Try again." });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form style={{ display: "grid", gap: 12 }}>
            <label>
              Username
              <Field
                name="username"
                type="text"
                placeholder="Enter username"
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
              <ErrorMessage
                name="username"
                component="div"
                style={{ color: "crimson", fontSize: 13 }}
              />
            </label>

            <label>
              Email
              <Field
                name="email"
                type="email"
                placeholder="Enter email"
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
              <ErrorMessage
                name="email"
                component="div"
                style={{ color: "crimson", fontSize: 13 }}
              />
            </label>

            <label>
              Password
              <Field
                name="password"
                type="password"
                placeholder="Enter password"
                style={{ width: "100%", padding: 8, marginTop: 4 }}
              />
              <ErrorMessage
                name="password"
                component="div"
                style={{ color: "crimson", fontSize: 13 }}
              />
            </label>

            <button type="submit" disabled={isSubmitting} style={{ padding: "10px 14px", cursor: "pointer" }}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>

            {status && (
              <div
                style={{
                  marginTop: 8,
                  padding: "8px 12px",
                  background: status.type === "success" ? "#e6ffed" : "#ffe6e6",
                  border: "1px solid #ccc"
                }}
              >
                {status.message}
              </div>
            )}
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;

