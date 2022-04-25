import React from "react";
import PropTypes from "prop-types";
import { Field, useField } from "formik";
import { AnimatePresence, motion } from "framer-motion";
import { useAppContext } from "@/src/hooks/useAppContext";

export const FormField = ({
  label,
  name,
  placeholder,
  type,
  as,
  required,
  formSubmitError = "",
}) => {
  const { isLoading } = useAppContext();

  // eslint-disable-next-line no-unused-vars
  const [field, meta, helpers] = useField(name);
  const { error, touched } = meta;

  return (
    <div
      className={`
      form__group 
      ${error && touched ? "form__error" : ""}
      `}
    >
      <label
        htmlFor={name}
        className={`form__label ${required ? "field--required" : ""}`}
      >
        {label}
      </label>
      <Field
        id={name}
        name={name}
        type={type}
        disabled={isLoading}
        placeholder={placeholder}
        className="form__input"
        as={as}
      />
      <AnimatePresence initial={false}>
        {error && touched && (
          <motion.div
            animate="open"
            initial="closed"
            exit="closed"
            variants={{
              open: { opacity: 1, height: "auto" },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="form__helper-text form__error"
          >
            {error}
          </motion.div>
        )}
        {formSubmitError && (
          <motion.div
            animate="open"
            initial="closed"
            exit="closed"
            variants={{
              open: { opacity: 1, height: "auto" },
              closed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3 }}
            className="form__helper-text form__error form__global-error"
          >
            {formSubmitError}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

FormField.defaultProps = {
  placeholder: "",
  type: "text",
  as: "input",
  required: false,
};

const FIELD_TYPES = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "hidden",
  "image",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "reset",
  "search",
  "submit",
  "tel",
  "text",
  "time",
  "url",
  "week",
];

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf(FIELD_TYPES).isRequired,
  required: PropTypes.bool,
};
