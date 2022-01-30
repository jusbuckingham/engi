import './Profile.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Profile = (props) => {
   const { handleLogout, user } = props;
   const { id, name, email, exp } = user;
   const expirationTime = new Date(exp * 1000);
   let currentTime = Date.now();

   // make a condition that compares exp and current time
   if (currentTime >= expirationTime) {
       handleLogout();
       alert('Session has ended. Please login to continue.');
   }

   const userData = user ?
   (<div>
       <section>
       <div class="columns has-same-height is-gapless">
      <div class="column">
        <div class="card">
          <div class="card-content">
            <h3 class="title is-4">Profile</h3>

            <div class="content">
              <table class="table-profile">
                <tr>
                  <th colspan="1"></th>
                  <th colspan="2"></th>
                </tr>
                <tr>
                  <td>Name: {name}</td>
                </tr>
                <tr>
                  <td>Email: {email}</td>
                </tr>   
              </table>
            </div>
            <br/>
          </div>
        </div>
      </div>
 
    </div>
  </section>
   </div>) : <h2>Loading...</h2>

    const errorDiv = () => {
        return (
            <div className="text-center pt-4">
                <h3>Please <Link to="/login">login</Link> to view this page</h3>
            </div>
        );
    };
    
    return (
        <div className="text-center pt-4">
            {user ? userData : errorDiv()}
        </div>
    );

}

export default Profile;