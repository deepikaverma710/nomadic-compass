import React from "react";
import "../activitySearch/Search.css";

const Search = ({type, data, handleChange}) => {

    console.log(data)

    const categories = data.map(item => {
        if(type === "activity")
        return <option key={item.activityName} value={item.activityName}> {item.activityName} </option>
        else if(type==="destination")
        return <option key={item.destinationName} value={item.destinationName}> {item.destinationName} </option>
       
        return <option key={item.packageName} value={item.packageName}> {item.packageName} </option>
    }
    )      

//         (
//     (type==="activity" && <option key={item.activityName} value={item.activityName}> {item.activityName} </option>)
//     (type==="destination" && <option key={item.destinationName} value={item.destinationName}> {item.destinationName} </option>)
//   ))


  return (
      <div className="activity-cat">
        <select name="category"  className="search-adventure" onChange={handleChange} placeholder={`Select ${type}`}>
          {categories}
        </select>
      </div>
  );
};

export default Search;

