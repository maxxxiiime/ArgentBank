import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUserProfilName } from "../../redux/reducer/userSlice"
import "./editname.scss"

export default function EditName() {

const dispatch = useDispatch();
const userProfile = useSelector((state) => state.user); 
console.log(userProfile);
const [toggleEditName, setToggleEditName] = useState(false);
const token = useSelector((state) => state.auth.token);

const [newUserName, setNewUserName] = useState("");
const [errorMessage, setErrorMessage] = useState(""); 

const displayEditName = () => {
    setToggleEditName(!toggleEditName);
  };

//   fonction pour envoyer un nouveau userName
async function fetchNewUserName() {

  if (newUserName.trim() === "") {
    // Gérer le cas où newUserName est une chaîne vide
    setErrorMessage("Enter new username...");
    return;
  }

  try {
    const userNameString = String(newUserName);
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        userName: userNameString,
      }),
    });

    if (response.ok) {
      const responseData = await response.json();
      dispatch(setNewUserProfilName(userNameString));
      console.log(responseData);

    } else {
      console.error("Erreur :", response.statusText);
      if (response.status === 400) {
        const errorData = await response.json();
        console.error("Erreur 400 - Bad Request:", errorData);
      }
    }
  } catch (error) {
    console.error("Erreur :", error);
  }
}

  console.log(newUserName);
  return (   
    <div className="edit-user-info">
        <button onClick={displayEditName} className="edit-button">

            {!toggleEditName ? "Edit name" : "Close"}
          </button>
          {toggleEditName && (
            <>
              <h2>Edit user info</h2>
                <form onSubmit={(e) => {
                    e.preventDefault(); 
                    fetchNewUserName(token);
                    }}>
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name :</label>
                        <input type="text"
                        id="userName"
                            placeholder="Enter new username..."
                            onChange={(e) => setNewUserName(e.target.value)}
                        /> 
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name :</label>
                        <input type="text"
                        id="firstName"
                         value={userProfile.firstName} readOnly />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name :</label>
                        <input type="text" 
                        id="lastName"
                        value={userProfile.lastName} readOnly />
                    </div>
                    <button type="submit" className="edit-button">Save</button>
                    <button onClick={displayEditName} className="edit-button">cancel</button>
                    {errorMessage && <p className="error-message">{errorMessage}</p>}
                </form>
            </>
          )}
    </div>
  )}