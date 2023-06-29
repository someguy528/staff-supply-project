import { useContext, useState } from "react"
import { Redirect, useHistory } from "react-router-dom"
import { UserContext } from "./context/UserContext"

function CreateUser(){

    const [newUser, setNewUser] = useState({
        username: "",
        first_name: "",
        last_name: "",
        password: "",
        confirmPassword: "",
        is_inventory_control: false
    })
    console.log(newUser)

    function handleNewUserFormChange(e){
        if(e.target.name === "is_inventory_control"){
            return( setNewUser({...newUser, [e.target.name] : e.target.checked }))
        }
        setNewUser({...newUser, [e.target.name] : e.target.value})
    }

    const history = useHistory()
    const {user} = useContext(UserContext)
    if(!user.currentUser.is_admin){return <Redirect to="/" />}

    return (
        <section>
            <h1>Create User</h1>
            <form>
            <header>Username</header>
            <input name="username" onChange={handleNewUserFormChange} />
            <header>First Name </header>
            <input name="first_name" onChange={handleNewUserFormChange}  />
            <header>Last Name </header>
            <input name="last_name" onChange={handleNewUserFormChange}  />
            <header>Password</header>
            <input type="password" name="password" onChange={handleNewUserFormChange}  />
            <header>Confirm Password</header>
            <input type="password" name="confirmPassword" onChange={handleNewUserFormChange}  />
            <header>Inventory Control? </header>
            <input type="checkbox" name="is_inventory_control" onChange={handleNewUserFormChange} />
            <div></div>
            <button type="submit" >Submit</button>
            </form>
        </section>
    )
}

export default CreateUser