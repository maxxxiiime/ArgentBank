import React, { useState } from "react";

import { useSelector } from 'react-redux';

import "./editname.scss"


export default function EditName() {

  const userProfile = useSelector((state) => state.user); 
console.log(userProfile);
const [toggleEditName, setToggleEditName] = useState(false);

const displayEditName = () => {
    setToggleEditName(!toggleEditName);
  };

  return (
    
    <div className="edit-user-info">
        <button onClick={displayEditName} className="edit-button">
  Edit Name
            {!displayEditName ? "Edit name" : "Close"}
            
          </button>
          {toggleEditName && (
            <>
              <h2>Edit user info</h2>
              
                <form >
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name :</label>
                        <input
                            type="text"
                            // value={newUserName}
                            // onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name :</label>
                        <input
                            type="text"
                            value={userProfile.firstName} readOnly
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name :</label>
                        <input
                            type="text"
                            value={userProfile.lastName} readOnly
                        />
                    </div>
                    <button type="submit" className="edit-button">Save</button>
                    <button onClick={displayEditName} className="edit-button">cancel</button>
                </form>
            </>
)}

    </div>
    
  )
}