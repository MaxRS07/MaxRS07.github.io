import '../styles/Contact.css';
import { sendEmail } from '../services/emailService';

function Contact() {
    const handleSubmit = (e) => {
        e.preventDefault();
        const form = document.getElementById("contact-form");
        const name = form.children[0].value;
        const email = form.children[1].value;
        const message = form.children[2].value;

        if (validateForm(email, message, name)) {
            form.reset();
            console.log("Sent");
            sendEmail(email, message, name);
        }
    };
    return (
        <div className="contact-container">
            <h1>Contact Me</h1>
            <form className="contact-form" id="contact-form">
                <input type="text" placeholder="Name" id="name" />
                <input type="email" placeholder="Email" id="email" />
                <textarea placeholder="Message" id="message" />
                <button onClick={handleSubmit}>Send</button>
            </form>
        </div>
    );
}
function validateForm(email, message, name) {
    if (String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
    ) {
        return email && message && name;
    }
    return false;
}
export default Contact;
