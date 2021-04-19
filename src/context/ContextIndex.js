import React, { useState, useEffect } from 'react';
import { authMethods } from '../firebase/authMethods'
import { getCartByUid } from '../network';

export const firebaseAuth = React.createContext()

const ContextIndex = (props) => {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(window.localStorage.token)
    const [cartCount, setCartCount] = useState([])
    const [reset, setReset] = useState(true)

    // =======Register=============//
    const onRegisterClicked = () => {
        authMethods.register(inputs.email, inputs.password, setErrors, setToken);
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
        if (token != null) {
            (async () => {
                const newCart = await getCartByUid(token)
                const quantity = [newCart.map(a => a.cartList.map(b => { return b.quantity }))]
                let count = -1
                const total = quantity[0][0].map(a => count = count + a)
                setCartCount(count)
                console.log(`cart Count is ${count}`)
            })()
        }
    }, [reset]);

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
                cartCount,
                reset,
                setReset
            }}>
            {props.children}
        </firebaseAuth.Provider>
    );
};

export default ContextIndex;
