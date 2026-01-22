import Header from "../components/Header";
import "../css-styles/contact.css";
import TitleComp from "../components/title-comp.jsx";

function ContactPage(){
    return(
        <div className="contact-page">
            <Header />
            <TitleComp text="Contact Me" />
        </div>
    );
}
export default ContactPage;