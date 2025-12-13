// src/App.jsx
import { useState } from "react";
import "./App.css";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/formikForm.jsx";

function App() {
  const [useFormik, setUseFormik] = useState(false);

  return (
    <div style={{ maxWidth: 480, margin: "40px auto", padding: "0 16px", fontFamily: "system-ui, sans-serif" }}>
      <h1>ALX FE Task 0: Form Handling</h1>

      <div style={{ marginBottom: 16 }}>
        <button
          onClick={() => setUseFormik(false)}
          style={{
            marginRight: 8,
            padding: "8px 12px",
            border: "1px solid #ccc",
            background: useFormik ? "#fff" : "#efefef",
            cursor: "pointer"
          }}
        >
          Controlled Components
        </button>
        <button
          onClick={() => setUseFormik(true)}
          style={{
            padding: "8px 12px",
            border: "1px solid #ccc",
            background: useFormik ? "#efefef" : "#fff",
            cursor: "pointer"
          }}
        >
          Formik
        </button>
      </div>

      {useFormik ? <FormikForm /> : <RegistrationForm />}
    </div>
  );
}

export default App;

