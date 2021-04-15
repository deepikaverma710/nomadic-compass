import React from "react";
import "../activitySearch/Search.css";

const Search = ({type, data, handleActivityChange}) => {

    console.log(data)

    const activities = data.map(item => {
        if(type === "activity")
        return <option key={item.activityName} value={item.activityName}> {item.activityName} </option>
        else if(type==="destination")
        return <option key={item.destinationName} value={item.destinationName}> {item.destinationName} </option>
    }
    )      

//         (
//     (type==="activity" && <option key={item.activityName} value={item.activityName}> {item.activityName} </option>)
//     (type==="destination" && <option key={item.destinationName} value={item.destinationName}> {item.destinationName} </option>)
//   ))


  return (
      <div className="activity-cat">
        <select name="category"  className="search-adventure" onChange={handleActivityChange} >
          {activities}
        </select>
      </div>
  );
};

export default Search;

