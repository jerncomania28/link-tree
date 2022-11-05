
// components 
import { useState } from "react";
import Footer from "../../components/Footer/Footer"

// styles 
import "./ContactPage.css";


const InputField = ({ label, type, placeholder, name, className, id, handleChange, showError, formInput }) => {
    return (
        <div className={`input-field ${className}`}>
            <label htmlFor={`#${id}`}>{label}</label> <br />
            <input
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                onChange={handleChange}
                value={formInput[name]}
            />
            <br />
            {
                (showError && formInput[name].length === 0) &&
                <small className="error-message">{`${type} field cannot be Empty!`}</small>
            }
        </div>
    )
}

const ContactPage = () => {

    const defaultForm = {
        firstName: "",
        lastName: "",
        email: "",
        message: ""
    }

    const [formInput, setFormInput] = useState(defaultForm);
    const [showError, setShowError] = useState(false);



    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormInput({ ...formInput, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!Object.values(formInput).every(Boolean)) {
            setShowError(true);
        } else {
            setShowError(false);
            alert("response recorded!")
            setFormInput(defaultForm)
        }

    }

    return (
        <div className="contact">
            <div className="contact-container">
                <div className="contact-header">
                    <h3>Contact Me</h3>
                    <p>Hi there , Contact me to ask me about anything you have in mind.</p>
                </div>


                <form className="contact-form">

                    <div className="contact-form--container">
                        <InputField
                            label="first name"
                            type="text"
                            placeholder="Enter your first name"
                            name='firstName'
                            className="contact-form--container__input"
                            id="first_name"
                            handleChange={handleChange}
                            showError={showError}
                            formInput={formInput}
                        />
                        <InputField
                            label="last name"
                            type="text"
                            placeholder="Enter your last name"
                            name='lastName'
                            className="contact-form--container__input"
                            id="last_name"
                            handleChange={handleChange}
                            showError={showError}
                            formInput={formInput}
                        />
                    </div>

                    <InputField
                        label="Email"
                        type="email"
                        placeholder="yourname@email.com"
                        name="email"
                        className="contact-form--container__wide"
                        id="email"
                        handleChange={handleChange}
                        showError={showError}
                        formInput={formInput}
                    />


                    <div className="contact-form--comment">
                        <label htmlFor="#message">Message</label>
                        <textarea
                            id="message"
                            placeholder="send me a message and i'll reply you as soon as possible."
                            name="message"
                            onChange={handleChange}
                            value={formInput["message"]}
                        ></textarea>
                        {
                            (showError && formInput["message"].length === 0) &&
                            <small className="error-message"> please enter a message </small>
                        }
                    </div>

                    <div className="contact-form--checkbox">
                        <input type="checkbox" /> <span>You agree to providing your data to Jeremiah who May contact you.</span>
                    </div>

                    <button
                        type="submit"
                        className="contact-form-button"
                        id="btn__submit"
                        onClick={handleSubmit}
                    >
                        send message
                    </button>

                </form>
            </div>

            <Footer />
        </div>
    )

}

export default ContactPage;