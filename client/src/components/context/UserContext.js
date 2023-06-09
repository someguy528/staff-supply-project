import React from 'react';
import {useState, useEffect} from 'react'; 

const UserContext = React.createContext();

function UserProvider({children}){

    // const [user, setUser] = useState(null);
    const [user, setUser] = useState({
      currentUser: null,
      currentAvatar: null
    });
    

    useEffect(() => {
        fetch("/api/users/show").then((response) => {
          if (response.ok) {
            // response.json().then((user) => setUser(user));
            response.json().then((data) => setUser({
              currentUser: data.user,
              currentAvatar: data.avatar
            }));
          }else{
            setUser({
              currentUser: false,
              currentAvatar: false
            })
          }
        });
      }, []);

    console.log(user)

    return (
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )

}

// eslint-disable-next-line 
export {UserContext, UserProvider};
