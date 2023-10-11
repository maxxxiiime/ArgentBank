import "./user.scss";

export default function User() {
  return (
    <main className="bg-dark"> 
    <div className="header">
        <h1>
          Welcome back
          <br />
          {/* {user.firstName + " " + user.lastName + " !"} */}
        </h1>
 </div>

        <button className="edit-button" >Edit Name</button>
        <section className="account">
            <div className="account-content-wrapper">
            <h3 className=" account-title">TEst</h3>
            <p className="account-amount">Testeee</p>
            <p className="account-amount-description">decription test</p>
            </div>
        <div className="account-content-wrapper cta">
           <button className="transaction-button">View transactions</button>
        </div>
        </section>
   
    </main>
  )
}