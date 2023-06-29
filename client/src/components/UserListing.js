function UserListing({u}){

    return (
        <li>
            <img src={`${u.avatar}`} className="userlisting" /> 
            ID : {u.user.id}, 
            Username: {u.user.username},
            First Name: {u.user.first_name},
            Last Name: {u.user.last_name},
            Admin: {u.user.is_admin.toString()},
            Inventory control: {u.user.is_inventory_control.toString()}
        </li>)

}

export default UserListing