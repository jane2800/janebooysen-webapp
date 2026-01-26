import "./Contact.module.css";

import TitleComp from "../components/Title.jsx";

function ContactPage(){
    return(
        <div id="contact" className="contact-page">
            <TitleComp text="Contact Me" />
        </div>
    );
}
export default ContactPage;