import { RiArrowDownSLine } from "react-icons/ri";
import '../scss/header.scss'

function Header() {

    return (
        <div className="container-navbar">
            <a href='#' className="h-logo">ALEX<span>t.</span></a>
            <div className="h-menu">
                <button href='#'><span>#</span>Projects</button>
                <button href='#'><span>#</span>Skills</button>
                <button href='#'><span>#</span>About-me</button>
                <button href='#'><span>#</span>Contacts</button>
                <button className='lang'>Eng<RiArrowDownSLine  /></button>
            </div>
        </div>
    );
}

export default Header;