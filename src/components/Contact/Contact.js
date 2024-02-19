// import "./Contact.scss";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
import errorImg from "../../assets/icons/error.svg";
import Input from "../../components/Input/Input";

function Contact() {
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const form = useRef();

  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (event) => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!isFormValid()) {
      setError(true);
      return;
    } else {
      setError(false);
      try {
        const response = await emailjs.sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          form.current,
          process.env.REACT_APP_PUBLIC_KEY
        );
        if (response.status === 200) {
          setSuccess(true);
          setFields();
        }
      } catch (error) {
        console.error(error);
        setError(error.response.data);
      }
    }
  };

  return (
    <section className="contact contact--dark">
      {!success && (
        <div className="contact__container">
          <div className="contact__text">
            <h1 className="contact__title">Let's Connect!</h1>
            <p className="contact__subtitle">
              <span className="contact__span">
                Like my code? Think we should work together?{" "}
              </span>
              <br />
              Feel free to reach out to me directly via{" "}
              <span className="contact__email">
                <a
                  href="mailto:louisohara20@gmail.com"
                  className="contact__link"
                >
                  email
                </a>
              </span>{" "}
              or by using the form below.
            </p>
          </div>
          <div className="contact__form-wrapper">
            <form className="contact__form" ref={form} onSubmit={handleSubmit}>
              <div className="contact__flex">
                <div className="contact__wrapper">
                  <Input
                    type="text"
                    name="name"
                    label="Name"
                    onChange={handleChange}
                    placeholder="Ada Lovelace"
                    alt={error && !fields.name ? "error" : ""}
                  />
                  {(error && !fields.email) || (error && !isNameValid()) ? (
                    <div className="contact__error-container">
                      <img
                        src={errorImg}
                        className="contact__icon"
                        alt="error icon"
                      />
                      <p className="contact__error">
                        {fields.name ? "Enter valid name" : "Required field"}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
                <div className="contact__wrapper">
                  <Input
                    type="text"
                    name="email"
                    label="Email"
                    onChange={handleChange}
                    placeholder="lovelace@gmail.com"
                    alt={error && !fields.email ? "error" : ""}
                  />{" "}
                  {(error && !fields.email) || (error && !isEmailValid()) ? (
                    <div className="contact__error-container">
                      <img
                        src={errorImg}
                        className="contact__icon"
                        alt="error icon"
                      />
                      <p className="contact__error">
                        {fields.email ? "Enter valid email" : "Required field"}
                      </p>
                    </div>
                  ) : (
                    ""
                  )}
                </div>
              </div>
              <div className="contact__message field">
                <label htmlFor="message" className="field__label">
                  Message
                </label>
                <textarea
                  className={`contact__textarea field__input  field__input--textarea ${
                    error && !fields.message ? "field__input--error" : ""
                  }`}
                  type="textarea"
                  name="message"
                  id="message"
                  onChange={handleChange}
                  placeholder="Let's talk about..."
                ></textarea>

                {error && !fields.message ? (
                  <div className="contact__error-container">
                    <img
                      src={errorImg}
                      className="contact__icon"
                      alt="error icon"
                    />
                    <p className="contact__error">Required field</p>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="contact__button-container">
                <button className="contact__button">SEND</button>
              </div>
            </form>
          </div>
        </div>
      )}
      {success && (
        <div className="contact__text contact__text--success">
          <h1 className="contact__title contact__title--success">
            Thanks for being in touch!
          </h1>
          <p className="contact__subtitle contact__subtitle--success">
            Your email was sent successfully
          </p>
        </div>
      )}
    </section>
  );
}

export default Contact;
