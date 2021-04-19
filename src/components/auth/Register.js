import React, {useContext} from 'react';
import {firebaseAuth} from '../../context/ContextIndex'
import { useHistory } from "react-router-dom";
import Navigation from "../../components/navigation/Navigation"
import "./auth.css"

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
        <div >
        <Navigation />
      </div>
      <div  className="register-wrap">
        <div className="register-wrap-inner">
        <h3 className="text-left mt-2 register-head">Register</h3>
    <div className="container" >
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
      <button className="mt-4 mb-3 justify-content-center">
          Register
          </button>
          {errors.length > 0 ? errors.map(error => <p style={{color: 'red'}}>{error}</p> ) : null}
          </form>
          <p className="form-links">
              Have an account? 
              <button 
              className=" form-links-inner"
              onClick={(e)=>{e.preventDefault();props.history.push('/login')}}>
                  Login
                  </button>
                  </p>
                  </div>
                  </div>
                  </div>
                  </>
                  );
                };
                export default Register;