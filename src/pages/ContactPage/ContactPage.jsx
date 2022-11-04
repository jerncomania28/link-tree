
// components 
import Footer from "../../components/Footer/Footer"

// styles 
import "./ContactPage.css";


const InputField = ({ label, type, placeholder, name, className }) => {
    return (
        <div className={className}>
            <label>{label}</label> <br />
            <input type={type} placeholder={placeholder} name={name} /> <br />
            <small className="error-message"> Dislays error messages</small>
        </div>

    )

}

const ContactPage = () => {
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
                        />
                        <InputField
                            label="last name"
                            type="text"
                            placeholder="Enter your last name"
                            name='lastName'
                            className="contact-form--container__input"
                        />
                    </div>

                    <InputField
                        label="Email"
                        type="email"
                        placeholder="yourname@email.com"
                        name="email"
                        className="contact-form--container__wide"
                    />


                    <div className="contact-form--comment">
                        <label>Message</label>
                        <textarea
                            placeholder="send me a message and I'll reply you as soon as possible."
                        ></textarea>
                    </div>

                    <div className="contact-form--checkbox">
                        <input type="checkbox" /> <span>You agree to providing your data to Jeremiah who May contact you.</span>
                    </div>

                    <button className="contact-form-button">send message</button>


                </form>
            </div>

            <Footer />
        </div>
    )

}

export default ContactPage;