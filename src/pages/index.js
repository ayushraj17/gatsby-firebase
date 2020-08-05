import React, { useState } from "react"
import { Link } from "gatsby"
import firebase from "gatsby-plugin-firebase"

import Layout from "../components/layout"
import "../style.css"

const IndexPage = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const handleSubmit = e => {
    e.preventDefault()
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .catch(function (error) {
        alert(error.message)

        // ...
      })
  }

  return (
    <Layout>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder=""
          required
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <label htmlFor="pass">Password</label>
        <input
          id="pass"
          type="password"
          placeholder=""
          required
          onChange={e => setPassword(e.target.value)}
        />
        <button type="submit">SIGN UP</button>
        <Link to="/sigin">
          <button>Reset Your Password</button>
        </Link>
      </form>
    </Layout>
  )
}

export default IndexPage
