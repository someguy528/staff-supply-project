import { useState, useContext } from "react"
import { useHistory } from "react-router-dom"
import { UserContext } from "./context/UserContext";

function LoginPage(){
    const {user, setUser} = useContext(UserContext);
    const [errors, setErrors] = useState([])
    const [login, setLogin] = useState({
        username: "",
        password: ""
    })
    const history = useHistory()

    function handleFormChange(e){
        setLogin({
            ...login,
            [e.target.name]: e.target.value
        })
    }
    function handleLoginSubmit(e){
        e.preventDefault();
        fetch("/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(login),
        }).then(resp => {
            if(resp.ok){
                resp.json().then((data) => {
                    console.log(data)
                    setUser({
                        currentUser: data.user,
                        currentAvatar: data.avatar
                    });
                    history.push("/")
                })
            } else {
                resp.json().then(error => 
                    console.log(error) 
                    // setErrors(error.errors)
                    )
            }
        })
    }

    return (
        <section>
            <h1>Login</h1>
            <form onSubmit={handleLoginSubmit} >
                <header>Username</header>
                <input type="text" name="username" onChange={handleFormChange} value={login.username} />
                <header>Password</header>
                <input type="password" name="password" onChange={handleFormChange} value={login.password} />
                <div></div>
                <button type="submit">Login</button>
                {errors.map(error => (
                    <header key={error} >{error}</header>
                ))}
            </form>
        </section>
    )
}

export default LoginPage