import { RiArrowDownSLine } from "react-icons/ri";
import BurgerMenu from "./UI kits/burger"
import '../scss/header.scss'

function Header() {

    return (
        <div className="container-navbar">
            <a href='#' className="h-logo">ALEX<span>t.</span></a>
            <div className="h-menu">
                <div className="menu-container">
                    <button href='#' className="btn-menu"><span>#</span>Projects</button>
                    <button href='#' className="btn-menu"><span>#</span>Skills</button>
                    <button href='#' className="btn-menu"><span>#</span>About-me</button>
                    <button href='#' className="btn-menu"><span>#</span>Contacts</button>
                    <button id="lang" className='btn-menu'>Eng<RiArrowDownSLine  /></button>
                </div>
                <BurgerMenu />
            </div>
        </div>
    );
}

export default Header;