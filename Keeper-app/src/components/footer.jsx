import React from 'react'

var presentYear = new Date().getFullYear();

function Footer() {
    return <footer>
        <p>Copyright {presentYear}</p>
    </footer>
    
}

export default Footer;