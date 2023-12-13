import { Link, useLocation } from "react-router-dom"


const NavBar = () => {
    
    const location = useLocation()
    const {pathname} = location


    return(
        <div>
            <nav>
            <Link to="/" className={pathname === "/" ? "selected" : ""}>The Huddle</Link>
            <Link to="/allplayers" className={pathname === "/allplayers" ? "selected" : ""}>All Players</Link>
            <Link to="/newplayer" className={pathname === "/newplayer" ? "selected" : ""}>Player SignUp</Link>
            </nav>
        </div>
    )
}

export default NavBar