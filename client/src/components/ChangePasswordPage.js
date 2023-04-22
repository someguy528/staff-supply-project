import { useState } from "react"

function ChangePasswordPage(){

    const [passwordForm, setPasswordForm] = useState({
        currentPassword: "",
        newPassword: "",
        confirmNewPassword: "",
    })

    function handleFormChange(e){
        setPasswordForm({
            ...passwordForm,
            [e.target.name] : e.target.value
        })
    }

    function handleFormSubmit(e){
        e.preventDefault();
        console.log("submit goes here")
    }

    console.log(passwordForm)

    return (
        <section>
            <h1>Change Password</h1>
            <form onSubmit={handleFormSubmit} >
                <header>Current Password</header>
                <input type="password" name="currentPassword" onChange={handleFormChange} />
                <header>New Password</header>
                <input type="password" name="newPassword" onChange={handleFormChange}  />
                <header>Confirm New Password</header>
                <input type="password" name="confirmNewPassword" onChange={handleFormChange} /><br/>
                <button type="submit" >Change Password</button>
            </form>
        </section>
    )
}

export default ChangePasswordPage