import firebaseconfig from './firebaseSDK'
import firebase from 'firebase'

export const authMethods = {

    register: (email, password, setErrors, setToken) => {
        firebase.auth().createUserWithEmailAndPassword(email,password) 
        .then( async res => {
             const token = firebase.auth().currentUser.uid
             await localStorage.setItem('token', token) 
             setToken(token)
             console.log(`currentUser ${token}`)
        })
        .catch(err => {
          setErrors(prev => ([...prev, err.message]))
        })
      },
    
    }