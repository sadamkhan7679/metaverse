import React, { useState, useEffect, useRef } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { ButtonBase } from "./Button";
import { Paragraph, StrobeText } from "./SplashScreen/Text";
import { FormField } from "./FormField";
import { AnimatePresence, motion } from "framer-motion";
import { MdClose } from "react-icons/md";
import { useAppContext } from "@/src/hooks/useAppContext";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required("This field is required...")
    .email("This does not look like an email to me..."),
});

// TODO:
// - framer motion
// - formik

const Popup = ({ isOpen, handleClose }) => {
  const { isLoading, setLoading, submitEmail, setSubscribed } = useAppContext();
  const [isSent, setSent] = useState(false);
  const [error, setError] = useState("");
  const ref = useRef(null);

  const handleSubmit = async ({ email }) => {
    setLoading(true);
    setError("");
    submitEmail(email)
      .then((res) => {
        if (res.ok) return res.json();
        throw new Error(
          `An error occured during form subbmision. \n\n Status: ${res.statusText}`
        );
      })
      .then(() => {
        setSent(true);
        setSubscribed();
      })
      .catch((err) => {
        setError(
          `An error occured during form submission. Please try again later, or contact support via Discord server.`
        );
        console.log(err.message);
      })
      .then(() => setLoading(false));
  };

  useEffect(() => {
    /* Close the popup when the user clicks outside of it */
    if (isLoading) return;

    const closePopup = (event) => {
      if (ref.current && ref.current.contains(event.target)) {
        return;
      }

      handleClose();
    };

    document.addEventListener("mousedown", closePopup);
    return () => document.removeEventListener("mousedown", closePopup);
  }, [isLoading]);

  const overlayAnim = {
    hidden: { opacity: 0 },
    opaque: { opacity: 1 },
  };

  const popupBoxAnim = {
    hidden: { opacity: 0 },
    opaque: {
      opacity: 1,
      transition: {
        delay: 0.4,
      },
    },
  };

  return (
    <AnimatePresence inital={false}>
      {isOpen && (
        <motion.div
          key="overlay"
          initial="hidden"
          animate="opaque"
          exit="hidden"
          variants={overlayAnim}
          transition={{ duration: 0.2 }}
          className="popup__overlay"
        />
      )}
      {isOpen && (
        <motion.div
          ref={ref}
          key="popup"
          initial="hidden"
          animate="opaque"
          exit="hidden"
          variants={popupBoxAnim}
          transition={{ duration: 0.2 }}
          className="popup__box"
        >
          <motion.div className="popup__bg">
            <div className="popup__bg-accent pink top" />

            <header className="popup__header">
              <div className="popup__headline to-right">Paradox</div>
              <div className="popup__heading--wrapper">
                <StrobeText className="popup__heading center">
                  Subscribe
                </StrobeText>
              </div>
              <div className="popup__headline to-left">Metaverse</div>
              <div className="popup__headline popup__now-text to-right">
                <StrobeText>NOW</StrobeText>
              </div>
            </header>

            {!isSent && (
              <section className="popup__content">
                <h2 className="popup__title">
                  <span className="text--accent pink">whitelist</span> raffle!
                </h2>

                <Paragraph>
                  To be entered into our raffle and get a chance to win a spot
                  in our whitelist.
                </Paragraph>
                <Paragraph>
                  All we need is your <strong>email address</strong>.
                </Paragraph>
              </section>
            )}

            {isSent && (
              <section className="popup__content">
                <h2 className="text--title">
                  You&apos;re <span className="text--accent pink">there</span>!
                </h2>
                <Paragraph>
                  We will be in touch, so stay tuned and look out for emails
                  from{" "}
                  <span className="text--accent pink">The Paradox Team</span>!
                </Paragraph>
              </section>
            )}

            {!isSent && (
              <Formik
                initialValues={{ email: "" }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ errors, touched }) => (
                  <>
                    <Form className="popup__form">
                      <FormField
                        name="email"
                        label="Email"
                        placeholder="adam.smith@gmail.com"
                        type="text"
                        error={errors.lastName}
                        touched={touched.lastName}
                        // preferablly should be moved into custom Form element
                        formSubmitError={error}
                      />
                      <ButtonBase
                        withLoading
                        className="popup__button"
                        disabled={
                          (errors.email && touched.email) || isLoading || error
                        }
                        type="submit"
                      >
                        {!isLoading ? "Submit" : "Submitting"}
                      </ButtonBase>
                    </Form>
                  </>
                )}
              </Formik>
            )}

            <span className="popup__hint">click outside to close</span>
            <span className="popup__close" onClick={() => handleClose()}>
              <MdClose />
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Popup;
