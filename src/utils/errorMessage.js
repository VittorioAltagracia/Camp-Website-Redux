import { ErrorMessage } from "formik";

const errorMessage = (name) => {
  <ErrorMessage name={name}>
    {(msg) => <p className="text-danger">{msg}</p>}
  </ErrorMessage>;
};

export default errorMessage;
