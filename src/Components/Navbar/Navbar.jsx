import style from "./Navbar.scss"

export function Navbar () {
    return (
    <nav className={style.navStyle}>
        <ul>
            <li>
                <Navlink to={"/"}>All</Navlink>
            </li>

            <li>
                <Navlink to={"/space"}>Space</Navlink>
            </li>

            <li>
                <Navlink to={"/food"}>Food</Navlink>
            </li>

            <li>
                <Navlink to={"/brain"}>The Brain</Navlink>
            </li>

            <li>
                <Navlink to={"/earth"}>Earth</Navlink>
            </li>

            <li>
                <Navlink to={"/marine"}>Marine</Navlink>
            </li>

            <li>
                <Navlink to={"/smologies"}>Smologies</Navlink>
            </li>
        </ul>
    </nav>
    )
}