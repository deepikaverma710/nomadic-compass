import React from 'react';
import "../activitySearch/Search.css";

const Search = () => {

return(
        <div>
                <form action="#" id="banner-searchbox" className="cat-selection">
                  <div className="activity-cat">
                    <select name="category" className="search-adventure">
                        <option>Select Activity</option>
                        <option>Camping</option>
                        <option>Mountian Biking</option>
                        <option>Trekking</option>
                        <option>Photography</option>
                        <option>Yoga</option>
                        <option>Rafting</option>
                        <option>Rock Adventure</option>
                    </select>
                </div>
                <div className="adventure-cat destination">
                    <select name="destination" className="search-adventure">
                        <option>Select Your Destination</option>
                        <option>Pangong Tso- Leh</option>
                        <option>Durbook- Leh</option>
                        <option>Khoti, HP</option>
                        <option>Jim Corbet, UK</option>
                        <option>Pallolem, Goa</option>
                        <option>Ethiopia</option>
                        <option>Tanzania</option>
                    </select>
                </div>
                <div className="adventure-cat floatright">
                    <select name="package" className="search-adventure">
                        <option>Select Trip</option>
                        <option>Golden Traingle</option>
                        <option>Temple Tiger</option>
                        <option>The Spiritual Escapade</option>
                        <option>The Himalayan Odyssey</option>
                    </select>
                </div>                                            
                <div className="search-adventure"></div>
                <button type="submit" id="btn-search-category">SEARCH</button>
              </form>
        </div>
    );

};

export default Search;