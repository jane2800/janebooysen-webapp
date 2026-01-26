import "./Contact.module.css";

import Header from "../components/Header";
import TitleComp from "../components/Title.jsx";

function ContactPage(){
    return(
        <div className="contact-page">
            <Header />
            <TitleComp text="Contact Me" />
        </div>
    );
}
export default ContactPage;