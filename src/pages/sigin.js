import React, { useState } from "react"
import Layout from "../components/layout"
import firebase from "gatsby-plugin-firebase"

import "../style.css"

function Sigin() {
  const [email, setEmail] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    console.log("hello")

    firebase
      .auth()
      .sendPasswordResetEmail(email)
      .then(function () {
        alert("Email Sent")
      })
      .catch(function (error) {
        alert(error.message)
      })
  }

  return (
    <Layout>
      <form autoComplete="off" onSubmit={e => handleSubmit(e)}>
        <h2>Reset Your Password</h2>
        <label htmlFor="email2"> Enter Your Email</label>
        <input
          required
          id="email2"
          type="email"
          className="email2"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <button>Send Link</button>
      </form>
    </Layout>
  )
}

export default Sigin
