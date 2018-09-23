import React from "react";

const NavBar = props => {
    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    Navbar{" "}
                    <span className="badge badge-pill badge-primary m-2">
                        {props.totalActiveCounters}
                    </span>
                </a>
            </nav>
        </div>
    );
};
export default NavBar;
