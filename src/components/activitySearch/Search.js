import React from "react";
import "../activitySearch/Search.css";

const Search = ({type, data, handleChange}) => {

    const categories = data.map(item => {
        if(type === "activity")
        return (<option key={item.activityName} value={item.activityName}> {item.activityName} </option>)
        else if(type==="destination")
        return <option key={item.destinationName} value={item.destinationName}> {item.destinationName} </option>
       
        return <option key={item.packageName} value={item.packageName}> {item.packageName} </option>
    }
    )      

  return (
      <div className="activity-cat">
        <select name="category"  className="search-adventure" onChange={handleChange} placeholder={`Select ${type}`}>
          <option> {`Select ${type}`} </option>
          {categories}
        </select>
      </div>
  );
};

export default Search;

