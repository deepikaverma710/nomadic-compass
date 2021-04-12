import firebaseconfig from './firebaseSDK'
import firebase from 'firebase'

export const authMethods = {

  //============ Register function=====================//
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
  
   //============ Login function=====================//
  login: (email, password, setErrors, setToken) => {
    firebase.auth().signInWithEmailAndPassword(email,password) 
    .then( async res => {
      const token = firebase.auth().currentUser.uid
      await localStorage.setItem('token', token)
      setToken(window.localStorage.token)
    })
    .catch(err => {
      setErrors(prev => ([...prev, err.message]))
    })
  },
  
   //============ Logout function=====================//
  logout: (setErrors, setToken) => {
    firebase.auth().signOut().then( res => {
      localStorage.removeItem('token')
      setToken(null)
    })
    .catch(err => {
      setErrors(prev => ([...prev, err.message]))
      localStorage.removeItem('token')
      setToken(null)
    })
  },
}