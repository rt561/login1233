import React, { useState } from 'react';
import axios from "axios";
import './Login.css';


const Login = () => {

  const [values, setvalues] = useState({
    email: " ",
    pass: " ",
    showPass: "false",
  })
  const [message, setMessage] = useState('')
  const [err, seterr] = useState('')

  const handlesubmit = (e) => {
    e.preventDefault();

    const regEx = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    if (values?.email == "eve.holt@reqres.in" && values?.pass == "cityslicka") {

      axios
        .post("https://reqres.in/api/login", {
          email: values.email,
          password: values.pass,

        })


        .then((res) => { localStorage.setItem("token", res.data.token) })


        .catch((err) => console.log(err))

    }
    else if (values?.email == " ") {

      setMessage("email is required");
    }
    else if (values?.email != "eve.holt@reqres.in") {
      setMessage("Email not exist");
    }
    else if (regEx.test(values?.email)) {

      console.log(message)
      setMessage(" ");

    }


    else {

      setMessage("  invalid email ");
    }


    if (values.pass === "cityslicka") {

      seterr(" ")

    } else if (values.pass == " ") {

      seterr(" password is required")

    } else {


      seterr("invalid password")
    }


  }

  return (

    <form className='login-form' onSubmit={handlesubmit}>
      <h3 className='login-screen-title'><b>Login</b></h3>
      <div className='form-group'>
        <label htmlFor='email'><b>Email</b></label>
        <input type="email" placeholder='email' className='inp'
          onChange={(e) => setvalues({ ...values, email: e.target.value })}
        />
        <p>{message}</p>

      </div>
      <div className='form-group'>
        <label htmlFor='password'><b>Password</b></label>
        <input type="password" placeholder='password' className='inp-1'
          onChange={(e) => setvalues({ ...values, pass: e.target.value })}
          minLength='9'
          maxLength='20'
        />
        <p>{err}</p>


      </div>
      <button type="submit" className='btn btn-primary' >Login</button>
    </form>


  )
}

export default Login