import React from 'react';
import '../App.css';

function Footer(props){
    return(
        <div className="footer">
        <div className="container" style={{bottom:0}}>    
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright @2022 Anurag Saini ❤</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;