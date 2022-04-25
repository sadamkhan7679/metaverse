import React from "react";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";
import { FormField } from "@/src/components/FormField";
import { ButtonBase } from "@/src/components/Button";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().required("Required"),
  message: Yup.string().required("Required"),
  type: Yup.string().required("Required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
  message: "",
  type: "business",
};

const ContactForm = () => {
  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };
  return (
    <div>
      <h2 className="form-subheading">Let&apos;s Talk</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form className="form-content">
            <FormField
              name="name"
              label="Name"
              placeholder="Adam Smith"
              type="text"
              error={errors.lastName}
              touched={touched.lastName}
            />
            <FormField
              name="email"
              label="Email"
              placeholder="adam.smith@example.com"
              type="email"
              error={errors.email}
              touched={touched.email}
            />
            <FormField
              name="phone"
              label="Contact No"
              placeholder="+1 (555) 555-5555"
              type="number"
              error={errors.phone}
              touched={touched.phone}
            />
            <FormField
              name="message"
              label="Your Message"
              placeholder="Enter your message here"
              type="text"
              error={errors.message}
              touched={touched.message}
            />

            <div id="my-radio-group" className="options-label">
              Are you a business or consumer?
            </div>
            <div
              role="group"
              aria-labelledby="my-radio-group"
              className="option-group"
            >
              <label>
                <Field type="radio" name="type" value="consumer" />
                Consumer
              </label>
              <label>
                <Field name="type" value="business" type="radio" />
                Business
              </label>
            </div>

            <ButtonBase
              withLoading
              className="form-submit-button"
              //disabled={(errors.email && touched.email) || isLoading || error}
              type="submit"
            >
              {/*{!isLoading ? "Submit" : "Submitting"}*/}
              Submit
            </ButtonBase>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
