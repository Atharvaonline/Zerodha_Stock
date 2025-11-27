import React from 'react';

function Pricing() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h2>Unbeatable pricing</h2>
                    <p>We pioneered the concept of discount broking and price
                    <br/>transparency in India. Flat fees and no hidden charges.</p>
                    <a href='/'>See Pricing -</a>
                </div>
                <div className="col-6">
                    <div className='row'>
                        <div className='col-4 mb-5'>
                    <img src='media/images/pricing0.svg' alt='pricing0.svg' style={{ width: "50%" }} />
                    <p style={{fontSize: '10px'}}> Free account <br/> opening </p>
                    </div>
                    <div className='col-4'>
                    <img src='media/images/pricingEquity.svg' alt='pricingEquity.svg' style={{ width: "50%" }} />
                    <p style={{fontSize: '10px'}}>Free equity delivery <br/>
                    and direct mutual funds</p>
                    </div>
                    <div className='col-4'>
                    <img src='media/images/pricing20.svg' alt='pricing20.svg' style={{ width: "50%" }} />
                    <p style={{fontSize: '10px'}}>Intraday and
                    F&O</p>
                    </div>
                        </div>
                </div>

            </div>

        </div>






    );
}

export default Pricing;