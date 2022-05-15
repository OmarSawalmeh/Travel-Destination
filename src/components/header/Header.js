import { Link } from "react-router-dom";
import Home from "../home/Home";
function Header(props){

    return(
        <>
            <Link to="/">Home Page</Link>
            <h1>Travel Destinations of the most visited cities around the world.</h1>
        </>
    );
}

export default Header;