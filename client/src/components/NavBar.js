import { useContext } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { UserContext } from "./context/UserContext";

function NavBar(){
    const {user, setUser} = useContext(UserContext)
    const history = useHistory()

    function handleLogout(){
        fetch("/api/logout", {
            method: "DELETE"
        }).then(()=>{
            setUser(false);
        })
    }

    if(!user)return(
        <section>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </section>
    )
    return(
        <section>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user"> User Settings </NavLink>
            <button onClick={handleLogout}> Logout </button>
        </section>
    )
}

export default NavBar