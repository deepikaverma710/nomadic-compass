import React, {useState} from 'react';
import {authMethods} from '../firebase/authMethods'

export const firebaseAuth = React.createContext()

const ContextIndex = (props) => {
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(window.localStorage.token)

    // =======Register=============//
    const onRegisterClicked = () => {
        authMethods.register(inputs.email, inputs.password, setErrors,setToken);
    }
    
    //========Login===============//
    const onLoginClicked = () => {
        authMethods.login(inputs.email, inputs.password, setErrors, setToken)
    }

    //========Logout===============//
    const onLogOutClicked = () => {
        authMethods.logout(setErrors, setToken)
      }

    return (
    <firebaseAuth.Provider
    value={{
        onRegisterClicked,
        onLoginClicked,
        onLogOutClicked,
        inputs,
        setInputs,
        errors,
        token,
        setToken
        }}>
            {props.children}
            </firebaseAuth.Provider>
            );
        };
        
        export default ContextIndex;