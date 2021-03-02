import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = process.env.REACT_APP_FIREBASE_CLIENTID

function Logout(props) {

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.setLoggedIn(false);
    props.setGoogleObj();
  };

  return (
    <div>
      <GoogleLogout
        clientId={clientId}
        buttonText="Logout"
        onLogoutSuccess={onSuccess}
      ></GoogleLogout>
    </div>
  );
}

export default Logout;