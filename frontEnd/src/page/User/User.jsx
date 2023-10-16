import React, { useEffect, useState } from "react";
import Account from '../../components/account/Account';
import "./user.scss";

export default function User() {
  const [userProfile, setUserProfile] = useState(null);


  useEffect(() => {
    // authToken = token d'authentfi recup dans localStorage
    const authToken = localStorage.getItem("authToken");

    // Vérifiez si le token existe
    if (authToken) {
      fetchDataProfile(authToken);
    }
  }, []);

  // fonction pour recupérer les donné des profile
 async function fetchDataProfile(authToken) {

  try {
    const response = await fetch("http://localhost:3001/api/v1/user/profile", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
      body: JSON.stringify({
        status: 0,
        message: "string",
        body: {
          id: "string",
          email: "string",
        },
      }),
    });
        // si HTTP ok (statut 200)
        if (response.ok) {
          // réponse en JSON
          const responseData = await response.json();
          console.log(responseData);
          setUserProfile(responseData.body);
          console.log(responseData.body);
        } else {
          console.error("Erreur :", response.statusText);
      
        }
      } catch (error) {
        console.error("Erreur :", error);  
      }
    };



  return (
    <main className="bg-dark"> 
    <div className="header">
        <h1>
          Welcome back
          <br />
          {userProfile ? `${userProfile.firstName} ${userProfile.lastName}` : "Loading..."}
        </h1>
 </div>

  <button className="edit-button" >Edit Name</button>
   
  <Account account="Argent Bank Checking (x8349)"
  amount="$2,082.79"
  description="Available Balance"
  transaction="View transactions"
   />
  <Account account="Argent Bank Checking (x6712)"
  amount="$10,928.42"
  description="Available Balance"
  transaction="View transactions"
   />
  <Account account="Argent Bank Checking (x8349)"
  amount="$184.30"
  description="Current Balance"
  transaction="View transactions"
   />
    </main>
  )
}