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
      console.log(newResult)
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
      const newResult = result.data.packages[0].destinations[0].tourPackages
      console.log(newResult)
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