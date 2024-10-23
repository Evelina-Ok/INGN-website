import navstyle from "./Navbar.module.scss"
import { NavLink } from "react-router-dom"

export function Navbar () {
    return (
    <nav className={navstyle.navStyle}>
        <img src="src/assets/icons/INGN-logo.svg" alt="" />
        <ul>
            <li>
                <NavLink to={"/"}>All</NavLink>
            </li>

            <li>
                <NavLink to={"/space"}>Space</NavLink>
            </li>

            <li>
                <NavLink to={"/food"}>Food</NavLink>
            </li>

            <li>
                <NavLink to={"/brain"}>The Brain</NavLink>
            </li>

            <li>
                <NavLink to={"/earth"}>Earth</NavLink>
            </li>

            <li>
                <NavLink to={"/marine"}>Marine</NavLink>
            </li>

            <li>
                <NavLink to={"/smologies"}>Smologies</NavLink>
            </li>
        </ul>
    </nav>
    )
}