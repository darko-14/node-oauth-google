import React, { Component } from 'react'
import {Button} from '@mui/material'
import GoogleLogin from 'react-google-login'

export default class Login extends Component {


  handleButton = () => {
    fetch('http://localhost:5000/login')
    .then(res => res.json())
    .then(console.log)
  }

  successGoogle = (res) => {
 
    fetch(`http://localhost:5000/auth`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(res.profileObj)
    })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("Token", JSON.stringify(data[1]));
      localStorage.setItem("User", JSON.stringify(data[0].username));
      window.location.reload()
  })
  }

  failureGoogle = (res) => {
    console.log(res);
  }

  render() {
    return (
      <div>
          {/* <Button onClick={this.handleButton} variant='contained'>Login with Google</Button> */}

          <GoogleLogin
            clientId="45842967068-rrj6p538hj5v2tt0msdt65ufdsp71jf2.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={this.successGoogle}
            onFailure={this.failureGoogle}
            cookiePolicy={'single_host_origin'}
            accessType="offline"
            // responseType="code"
            scope='openid email profile https://www.googleapis.com/auth/calendar'
          />,

      </div>
    )
  }
}
