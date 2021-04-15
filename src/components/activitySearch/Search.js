import React, { useState } from "react";
import "../activitySearch/Search.css";

const Search = ({type, data, handleActivityChange}) => {
    const [selected, setSelected] = useState(`Select ${type}`)
console.log(type)
console.log(data)
const activities = data.map((a) =>  (
    <option key={a.activityName} value={a.activityName}> {a.activityName} </option>
  ))

//   const changeHandler = (e) => {
//       e.preventDefault()
//       setSelected(e.target.value)
//   } 
// console.log(selected)
  return (
      <div className="activity-cat">
        <select name="category"  className="search-adventure" onChange={handleActivityChange} >
          {activities}
        </select>
      </div>
  );
};

export default Search;

