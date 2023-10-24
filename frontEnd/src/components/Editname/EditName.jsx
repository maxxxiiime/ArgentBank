import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserName } from "../../redux/reducer/userSlice"
import { setSignIn } from "../../redux/reducer/authSlice"
import "./editname.scss"

export default function EditName() {

const dispatch = useDispatch();
const userProfile = useSelector((state) => state.user); 
console.log(userProfile);
const [toggleEditName, setToggleEditName] = useState(false);
const token = useSelector((state) => state.auth.token);
const [newUserName, setNewUserName] = useState("");


const displayEditName = () => {
    setToggleEditName(!toggleEditName);
  };

//   fonction pour envoyer un nouveau userName
  async function fetchNewUserName(authToken) {

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
        body: JSON.stringify({
            userName: newUserName,
          }),
      });
          // si HTTP ok (statut 200)
          if (response.ok) {
            // réponse en JSON
            const responseData = await response.json();
            dispatch(setNewUserName(responseData));
            console.log(responseData);
            // setUser(responseData.body);
            console.log(responseData.body);
            if (responseData.token) {
                dispatch(setSignIn({ token: responseData.token }));
              }
          } else {
            console.error("Erreur :", response.statusText);
          }
        } catch (error) {
          console.error("Erreur :", error);  
        }
      };

  console.log(setNewUserName);
  console.log(newUserName);
  return ( 
    <div className="edit-user-info">
        <button onClick={displayEditName} className="edit-button">
  Edit Name
            {!displayEditName ? "Edit name" : "Close"}
          </button>
          {toggleEditName && (
            <>
              <h2>Edit user info</h2>
                <form onSubmit={ fetchNewUserName }>
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name :</label>
                        <input type="text"
                            placeholder="Enter new username..."
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name :</label>
                        <input type="text" value={userProfile.firstName} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name :</label>
                        <input type="text" value={userProfile.lastName} readOnly />
                    </div>
                    <button type="submit" className="edit-button">Save</button>
                    <button onClick={displayEditName} className="edit-button">cancel</button>
                </form>
            </>
)}
    </div>
  )
}