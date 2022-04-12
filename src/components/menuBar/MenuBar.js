import React from "react";

import './MenuBar.css'


const menuBar = () => {
    return (
        <div className="menuBar d-flex align-items-center">
            <div>
                <h1>Pamshe</h1>
            </div>
            <div>
                <h6>Category</h6>
            </div>
            <div>
                <h6>Category</h6>
            </div>
            <div>
                <h6>Search</h6>
            </div>
            <div>
                <h6>User</h6>
            </div>
            <div>
                <h6>Cart</h6>
            </div>
        </div>
    ) 
}

export default menuBar;