import { useEffect, useState } from "react"
import UserListing from "./UserListing"

function UsersList() {


    const [users, setUsers] = useState([])
    useEffect(() => {
        fetch("/api/users").then(resp => resp.json()).then(data =>
            setUsers(data)
        )
    }, [])
    console.log(users)
    const allUsers = users.map(u => {
        return (
            <UserListing u={u} key={u.user.id} />)

    })

    return (
        <section>
            <h1>Users List</h1>
            <ul>
                {allUsers}
            </ul>
        </section>
    )
}

export default UsersList