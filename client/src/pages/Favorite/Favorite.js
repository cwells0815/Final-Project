import React from "react";
import "./Favorite.css";

class Favorite extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <h2 className="page-title">Favorites</h2>
                <p>List of favorite movies</p>
            </div>
        )
    }
};

export default Favorite;