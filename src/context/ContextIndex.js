import React, {useState, useEffect} from 'react';
import {authMethods} from '../firebase/authMethods'
import { getCartByUid } from '../network';

export const firebaseAuth = React.createContext()

const ContextIndex = (props) => {
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(window.localStorage.token)
    const [cart, setCart] = useState([])

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

      useEffect(() => {
        if(token != null ){
            (async () => {
           const newCart= await getCartByUid(token)
           setCart(newCart)
           console.log(newCart)
        })()
          }
    }, []);

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
        setToken,
        cart
        }}>
            {props.children}
            </firebaseAuth.Provider>
            );
        };
        
        export default ContextIndex;
