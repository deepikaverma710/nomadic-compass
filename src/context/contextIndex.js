import React from 'react';
import {authMethods} from '../firebase/authMethods'

export const firebaseAuth = React.createContext()
const contextIndex = (props) => {
    const [inputs, setInputs] = useState({email: '', password: ''})
    const [errors, setErrors] = useState([])
    const [token, setToken] = useState(window.localStorage.token)

    // =======Register=============//
    const onRegisterClicked = () => {
        authMethods.register(inputs.email, inputs.password, setErrors,setToken);
    }
    
    return (
    <firebaseAuth.Provider
    value={{
        onRegisterClicked,
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
        
        export default contextIndex;