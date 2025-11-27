import React from 'react';

function Footer() {
    return (
        <div className="container p-5 mb-5">
        <div className="row text-center">
            <div className='col-2 mt-5'>
                <p style={{fontSize: '13px'}}>© 2010 - 2025, Zerodha Broking Ltd. <br/>All rights reserved.</p>
            </div>
            <div className='col-2 mt-5'>
                <h9>Account</h9></div>
                <a href='/'>Open demat account</a>
            <div className='col-2 mt-5'>
            <h9>Support</h9>
            </div>
            <div className='col-2 mt-5'>
            <h9>Company</h9>
            </div>
            <div className='col-2 mt-5'>
            <h9>Quick links</h9>
            </div>

             
             
         </div>
     </div>
    );
}

export default Footer;

