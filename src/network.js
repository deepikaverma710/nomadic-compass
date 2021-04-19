import axios from 'axios'

const apiUrl = process.env.REACT_APP_HEROKU_API_URL

export async function getAllActivities() {
    try {
      const result = await axios.get(`${apiUrl}api/activities`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      const newResult = result.data.activities
      return newResult
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  export async function getAllDestinations(activity) {
    try {
      const result = await axios.get(`${apiUrl}api/activities/${activity}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      const newResult = result.data.destinations[0].destinations
      return newResult
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  export async function getAllPackages(activity,destination) {
    try {
      const result = await axios.get(`${apiUrl}api/activities/${activity}/${destination}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      const newResult = result.data.destination[0].tourPackages
      return newResult
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  

  export async function getPackageDates(activity,destination,packageName) {
    try {
      const result = await axios.get(`${apiUrl}api/activities/${activity}/${destination}/${packageName}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      const newResult = result.data.selectedPackage[0]
      return newResult
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }
  
  export async function addNewActivity(){
    try {
      const result = await axios.post(`${apiUrl}api/activities`, {
        activityName: "New activiity 4 ",
            destinationName: "new",
                packageName: "new package",
                packageDescription: "Description",
                packageHighlights: "Highlights",
                startLocation: "start here",
                finishLocation: "finish here",
                groupSize: 5,
                activityLevel: "Easy",
                duration: 5,
                budget: 10000,
                inclusions: "ABC, DEF",  
                    tripStatus: "Active"
                
      })
      return result.data
    } catch (error) {
      console.log(error)
    }
  } 

  export async function getCartByUid(uid) {
    console.log(uid)
    try {
      const result = await axios.get(`${apiUrl}api/user/${uid}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      console.log(result.data.cart)
      const newResult = result.data.cart
      return newResult
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  export async function getPackages(uid, dateid) {
    try {
      const result = await axios.get(`${apiUrl}api/user/${uid}/${dateid}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      console.log(result.data.packages)
      const newResult = result.data.packages
      console.log(newResult)
      return newResult
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  export async function incQuantity(cartListId) {
    try {
      const result = await axios.post(`${apiUrl}api/user/inc/${cartListId}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      return result
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  export async function decQuantity(cartListId) {
    try {
      const result = await axios.post(`${apiUrl}api/user/dec/${cartListId}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      return result
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  export async function deleteCartListItem(cartListId) {
    try {
      const result = await axios.delete(`${apiUrl}api/user/deletecart/${cartListId}`,{
          headers:{
            "Access-Control-Allow-Origin": "*"
          }
      })
      return result
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

    
  export async function insertCartItem(uid, dateId, activityName, destinationName){
    try {
      const result = await axios.post(`${apiUrl}api/user/${uid}`, {
        dateId: dateId,
        activityName: activityName,
        destinationName: destinationName
      })
      return result.data
    } catch (error) {
      console.log(error)
    }
  } 

  export async function insertUser(uid){
    try {
      const result = await axios.post(`${apiUrl}api/user`, {
        uid:uid
      })
      console.log()
    } catch (error) {
      console.log(error)
    }
  } 

