import { useContext, useState } from "react";
import { DirectUpload } from 'activestorage';
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import ChangePasswordPage from "./ChangePasswordPage";
import { UserContext } from "./context/UserContext";

function UserSettings() {

    const [userForm, setUserForm] = useState({
        avatar: {}
    })
    const {user} = useContext(UserContext)
    const { url } = useRouteMatch()

    function handleFormChange(e) {
        if (e.target.name === 'avatar') {
            setUserForm({
                [e.target.name]: e.target.files[0]
            })
        } else {
            setUserForm({
                [e.target.name]: e.target.value
            })
        }

    }

    function uploadFile(file, user) {
        // const upload = new DirectUpload(file, 'http://localhost:3000/api/rails/active_storage/direct_uploads')
        const upload = new DirectUpload(file, 'http://localhost:3000/rails/active_storage/direct_uploads')
        console.log(upload)
        upload.create((error, blob) => {
            if(error){
                console.log(error)
            }else{
                console.log("No Errors!")
            }
        })
    }

    console.log(userForm)

    function handleUserSettingsSubmit(e) {
        e.preventDefault();
        // const data = new FormData();
        // data.append("user[avatar]", e.target.avatar.files[0])
        // console.log(data)
        // console.log(e.target.image.files[0])
        fetch(`/api/users/${user.id}`)
        .then(resp=>{
            if(resp.ok){
                resp.json().then(data=>{
                    uploadFile(userForm.avatar, data)
                })
            }else{
                resp.json().then(error=> console.log(error.errors))
            }
        })
        // uploadFile(userForm.avatar)
    }

    return (
        <section>

            <Switch>

                <Route exact path={`${url}`} >

                    <h1>User Settings</h1>
                    <form onSubmit={handleUserSettingsSubmit} >
                        <label>Change Avatar: <br /> </label>
                        <input type="file" name="avatar" onChange={handleFormChange} />

                        <button type="submit" > Change Settings </button>
                        <div> <Link to="/user/change_password" >Change Password</Link> </div>
                    </form>

                </Route>

                <Route exact path={`${url}/change_password`} >
                    <ChangePasswordPage />
                </Route>


            </Switch>

        </section>
    )
}

export default UserSettings