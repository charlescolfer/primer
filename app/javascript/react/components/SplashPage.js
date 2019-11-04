import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = props => {
  return (
    <div className="notice column large-12">
      <div className="login-side column large-6 small-6">
        <p> Already a member? </p>
        <div className="login-button button">
          <a href="/users/sign_in"> Log in </a>
        </div>
      </div>
      <div className="sign-up-side column large-6 small-6">
        <p> New to Primer? </p>
        <div className="login-button button">
          <a href="/users/sign_up"> Sign up Today </a>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
