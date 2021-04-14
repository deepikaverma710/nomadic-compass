import React, {useContext} from 'react';
import {firebaseAuth} from '../../context/ContextIndex'
import { useHistory } from "react-router-dom";

const Register = (props) => {
    let history = useHistory();
    const {onRegisterClicked, inputs, setInputs, errors} = useContext(firebaseAuth)
    
    const onInputSubmit = async(e) => {
        e.preventDefault()
        await onRegisterClicked()
        setTimeout(() => { history.push("/") }, 1000);
    }
    
    const onInputChange = e => {
        const {name, value} = e.target
        console.log(inputs)
        setInputs(prev => ({...prev, [name]: value}))
    }
    
    return (
        <>
        <h1 className="text-center mt-2">Register</h1>
    <div className="container border p-4" >
    <form onSubmit={onInputSubmit}  >
      <label 
      htmlFor="email" 
      className="form-label">Email address
      </label>
      <input 
      className="form-control"
      id="email"
      onChange={onInputChange} 
      name="email" 
      placeholder='email' 
      value={inputs.email} 
      />
       <label 
      htmlFor="password" 
      className="form-label">Password
      </label>
      <input 
      className="form-control"
      id="password"
      onChange={onInputChange} 
      name="password" 
      placeholder='password' 
      value={inputs.password} 
      />
      <button className="mt-2  justify-content-center">
          Register
          </button>
          {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
          </form>
          <p>
              Have an account?
              <button 
              className="mt-2"
              onClick={(e)=>{e.preventDefault();props.history.push('/signin')}}>
                  Login
                  </button>
                  </p>
                  </div>
                  </>
                  );
                };
                export default Register;