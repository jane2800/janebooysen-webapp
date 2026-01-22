import Header from "../components/Header";
import '../css-styles/home.css';
import TitleComp from "../components/title-comp.jsx";

function HomePage(){
    return(
        <div className="home-page">
            <Header />
            <TitleComp text="Welcome to My Home Page" />
        </div>
    );
}
export default HomePage;