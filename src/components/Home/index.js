import React from "react";
import "../Styles.css"
import { FaSearch } from 'react-icons/fa';


export default function Home() {
    return(
        <div calssName="Styles">
            <div className="Styles-header-top">
                <div className="Styles-row">
                    <div className="col-md-8 col-sm-6 col-xs-12">
                        <div className="Styles-header-top-right">
                        <div className="Styles-row">
                            <FaSearch/>
                            <p>Register</p>
                        </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}