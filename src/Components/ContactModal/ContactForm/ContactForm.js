import React from "react";
import {
  Button,
  InputGroup,
  Form as BootstrapForm,
  Container,
} from "react-bootstrap";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const onSubmitHandeler = async (values) => {
    console.log(values);
  };
  let initVals = {
    email: "",
    subject: "",
    message: "",
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string()
      .matches(
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Provide valid email"
      )
      .required("Email is required!"),
    subject: Yup.string().required("Subject is required!"),
    message: Yup.string().required("Message is required!"),
  });
  return (
    <div className="">
      <h1 className={styles.heading}>Drop a Message</h1>
      <Container>
        <Formik
          initialValues={initVals}
          validationSchema={SignupSchema}
          onSubmit={(values) => onSubmitHandeler(values)}
        >
          {({ errors, touched }) => (
            <Form>
              <InputGroup className="mb-3 d-flex flex-column align-items-end">
                <div className="d-flex justify-content-end align-items-center pb-2 w-50">
                  {errors.email && touched.email ? (
                    <span className={` ${styles.err_msg} mr-auto`}>
                      {errors.email}
                    </span>
                  ) : null}
                  <label htmlFor="email" className={styles.label}>
                    Email
                  </label>
                </div>
                <Field
                  as={BootstrapForm.Control}
                  placeholder="Type subject of the email"
                  name="email"
                  isValid={!errors.email && touched.email}
                  type="text"
                  className={`${styles.input} w-50 text-end`}
                  isInvalid={errors.email && touched.email}
                />
              </InputGroup>
              <InputGroup
                className="mb-3 d-flex flex-column align-items-end mr-5"
                style={{ paddingRight: "30px " }}
              >
                <div className="d-flex justify-content-end align-items-center pb-2 w-50">
                  {errors.subject && touched.subject ? (
                    <span className={` ${styles.err_msg} mr-auto`}>
                      {errors.subject}
                    </span>
                  ) : null}
                  <label htmlFor="subject" className={styles.label}>
                    Subject
                  </label>
                </div>
                <Field
                  as={BootstrapForm.Control}
                  placeholder="Type subject address"
                  name="subject"
                  isValid={!errors.subject && touched.subject}
                  type="subject"
                  className={`${styles.input} w-50 text-end`}
                  isInvalid={errors.subject && touched.subject}
                />
              </InputGroup>
              <InputGroup
                className="mb-3 d-flex flex-column align-items-end"
                style={{ paddingRight: "80px" }}
              >
                <div className="d-flex justify-content-end align-items-center pb-2 w-50">
                  {errors.message && touched.message ? (
                    <span className={` ${styles.err_msg} mr-auto`}>
                      {errors.message}
                    </span>
                  ) : null}
                  <label htmlFor="message" className={styles.label}>
                    Message
                  </label>
                </div>
                <Field
                  as="textarea"
                  placeholder="Type Message"
                  name="message"
                  isValid={!errors.message && touched.message}
                  type="message"
                  className={`${styles.input} ${styles.textarea} form-control w-50 text-end`}
                  isInvalid={errors.message && touched.message}
                />
              </InputGroup>

              <div className="text-end" style={{ paddingRight: "100px" }}>
                <Button variant="primary" type="submit" className={styles.btn}>
                  Submit
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </Container>
    </div>
  );
};

export default ContactForm;
