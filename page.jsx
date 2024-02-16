'use client'
import axios from "axios";
import Layout from "../component/layout";
import Link from "next/link";
import { useState } from "react";
import nextConfig from "../../../next.config.mjs";
import { NEXT_APP_API } from "../../../config";

export default function Page() {
  console.log("nextConfig", nextConfig)
  console.log('NEXT_APP_API',NEXT_APP_API)
  const [username, setUsername] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (username.length < 3) {
      setNameError('Name should be at least 3 characters');
      return;
    }
    setNameError('')

    if (password.length < 8) {
      setPasswordError('Password should be at least 8 characters');
      return;
    }

    try {
      let res = await axios.post(`${process.env.NEXT_APP_API}/api/user/create`,{
        username,
        email,
        password
      })
      if (res.data.success) {
        console.log(res.data);
      } else {
        console.log("Error in signup");
      }
    } catch (error) {
      console.log("Error occur during signup !", error)
    }
  }
  return (
    <Layout pageTitle="Signup">
      <Link href="/">Home</Link><br />

      <div className="wrapper">
        <form className="form-right" onSubmit={handleSubmit} >
          <div className="col-sm-6 mb-3">
            <label>Username</label>
            <input onChange={(e) => setUsername(e.target.value)} type="text" id="first_name" className="input-field" />
            {nameError && <div className="alert alert-danger">{nameError}</div>}
          </div>
          <div className="mb-3">
            <label>Your Email</label>
            <input onChange={(e) => setemail(e.target.value)} type="email" className="input-field" name="email" required />
          </div>
          <div className="row">
            <div className="col-sm-6 mb-3">
              <label>Password</label>
              <input onChange={(e) => setPassword(e.target.value)} type="password" name="pwd" id="pwd" className="input-field" />
              {passwordError && <div className="alert alert-danger">{passwordError}</div>}
            </div>
          </div>

          <div className="form-field">
            <input type="submit" defaultValue="login" className="register" name="login" />
          </div>
        </form>
      </div>
    </Layout>
  )
}

