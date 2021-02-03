import React, { useState } from 'react';
import { GoogleLogout } from 'react-google-login';

const clientId = '848023384184-eravrd6hcmavjg1bdmcpvcl7q7t7v0ns.apps.googleusercontent.com' //insert client id here

function Logout(props) {

  const onSuccess = () => {
    console.log('Logout made successfully');
    alert('Logout made successfully ✌');
    props.setLoggedIn(false);
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