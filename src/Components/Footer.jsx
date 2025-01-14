import React from "react";
import "../App.css";

function Footer(){
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <p>&#169; {currentYear} Ernesse Marie Berlin. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;