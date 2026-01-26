import './Home.module.css';

import Header from "../components/Header";
import Title from "../components/Title.jsx";

function HomePage(){
    return(
        <div className="home-page">
            <Header />
            <Title text="Welcome to My Home Page" />
        </div>);
}
export default HomePage;