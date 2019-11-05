import React from 'react'
import { Link } from 'react-router-dom'

const SplashPage = props => {
  return (
    <div>
      <div className="notice column large-12">
        <div className="row large-8">
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
        <div className="continue row large-4">
          <h6>
            Already logged in?
            <a href="/songs"> Go to Dashboad </a>
          </h6>
        </div>
      </div>
    </div>
  )
}

export default SplashPage
