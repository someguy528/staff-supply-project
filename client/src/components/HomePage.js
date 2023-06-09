import { useContext, useEffect, useState } from "react"
import { UserContext } from "./context/UserContext";


function HomePage() {

    const [count, setCount] = useState(0);
    const { user, setUser } = useContext(UserContext)

    useEffect(() => {
        fetch("/hello")
            .then((r) => r.json())
            .then((data) => setCount(data.count));
    }, []);

    // function handleLogout(){
    //     fetch("/api/logout", {
    //         method: "DELETE"
    //     }).then(()=>{
    //         setUser(false);
    //     })
    // }

    return (
        <section>
            {/* {user.currentUser !== false ? <h1>Welcome, {user.currentUser.username} </h1> : <h1> Welcome, Guest</h1>}  */}
            {user.currentUser.username ? <h1>Welcome, {user.currentUser.username} </h1> : <h1> Welcome, Guest</h1>} 
            { user.currentAvatar ? <img src={`${user.currentAvatar}`} /> : null } 
            {/* {user ? <button onClick={handleLogout} >Logout</button> : null} */}
            <h2>Page Count: {count}</h2>
        </section>
    )
}

export default HomePage