import "./Contact.scss";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import Input from "../../components/Input/Input";

function Contact() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  const isFormValid = () => {
    if (!fields.name || !fields.message || !fields.email) {
      return false;
    }
    return true;
  };
  const isEmailValid = () => {
    if (!fields.email.includes("@")) {
      return false;
    }
    return true;
  };
  const isNameValid = () => {
    const re = /^[a-zA-Z ]*$/;
    if (!re.test(fields.name)) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormValid()) {
      setError(true);
      return;
    } else {
      setError(false);
      try {
        if (
          process.env.REACT_APP_SERVICE_ID &&
          process.env.REACT_APP_TEMPLATE_ID &&
          formRef.current &&
          process.env.REACT_APP_PUBLIC_KEY
        ) {
          const response = await emailjs.sendForm(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            formRef.current,
            process.env.REACT_APP_PUBLIC_KEY
          );

          if (response.status === 200) {
            setSuccess(true);
            // setFields();
          }
        }
      } catch (error: any) {
        console.error(error);
        setError(true);
      }
    }
  };

  return (
    <div className="contact__wrapper">
      <div className="contact__undercolour"></div>

      <div className="contact__container">
        <div className="contact__text">
          <h1 className="contact__title">Contact me</h1>
          <p className="contact__subtitle">
            <span className="contact__email">
              <a
                href="mailto:ashley.francisroy@gmail.com"
                className="contact__link"
              >
                ashley.francisroy@gmail.com
              </a>{" "}
            </span>
            <br />
            <br />
            <span className="contact__representation">
              Ashley is represented by{" "}
              <a
                href="https://www.missinglinkfilms.co.uk/"
                className="contact__link"
              >
                Missing Link Films
              </a>{" "}
              for commercials and branded content.
            </span>
          </p>
        </div>
        <div className="contact__form-wrapper">
          {!success && (
            <form
              className="contact__form"
              ref={formRef}
              onSubmit={handleSubmit}
            >
              <div className="contact__flex">
                <Input
                  type="text"
                  name="name"
                  label="Name"
                  onChange={handleChange}
                  placeholder="Your name"
                  alt={error && !fields.name ? "error" : ""}
                />
                {(error && !fields.name) || (error && !isNameValid()) ? (
                  <div className="contact__error-container">
                    <p className="contact__error">
                      {fields.name ? "Enter valid name" : "Required field"}
                    </p>
                  </div>
                ) : (
                  ""
                )}
                <Input
                  type="text"
                  name="email"
                  label="Email"
                  onChange={handleChange}
                  placeholder="Your email"
                  alt={error && !fields.email ? "error" : ""}
                />{" "}
                {(error && !fields.email) || (error && !isEmailValid()) ? (
                  <div className="contact__error-container">
                    <p className="contact__error">
                      {fields.email ? "Enter valid email" : "Required field"}
                    </p>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div
                className={
                  error && !fields.message ? "field field--error" : "field"
                }
              >
                <label htmlFor="message" className="field__label">
                  Message
                </label>
                <textarea
                  className={`contact__textarea field__input field__input--textarea ${
                    error && !fields.message ? "field__input--error" : ""
                  }`}
                  // type="textarea"
                  name="message"
                  id="message"
                  onChange={handleChange}
                  placeholder="Your message"
                ></textarea>

                {error && !fields.message ? (
                  <div className="contact__error-container">
                    <p className="contact__error">Required field</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="contact__button-container">
                <button className="contact__button">Send</button>
              </div>
            </form>
          )}
          {success && (
            <div className="contact__text--success">
              <h1 className="contact__title--success">Message sent</h1>
              <p className="contact__subtitle--success">
                Thanks for being in touch!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
