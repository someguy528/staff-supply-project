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
            setUser({
                currentUser: false,
                currentAvatar: false
              })
            history.push("/");
        })
    }
    
    if(!user.currentUser)return(
        <section>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/login">Login</NavLink>
        </section>
    )

    if(user.currentUser.is_admin === true )return(
        <section>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/user"> User Settings </NavLink>
            <NavLink to="/create-user"> Create User </NavLink>
            <NavLink to="/users-list"> Users List </NavLink>
            <button onClick={handleLogout}> Logout </button>
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