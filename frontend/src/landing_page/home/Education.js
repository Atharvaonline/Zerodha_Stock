import React from 'react';

function Education() {
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6'>
                    <img src=' media/images/education.svg' alt='education' style={{width:"70%"}}/>

                </div>

                <div className='col-6 mt-5'>
                    <h2>Free and open market education</h2>
                    <p className='mt-4'>Varsity, the largest online stock market education book in the <br/> world covering everything from the basics to advanced trading.</p>
                    <a href='#'>Varsity <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                    <p>TradingQ&A, the most active trading and investment community <br/> in India for all your market related queries.</p>
                    <a href='#'>TradingQ&A <i class="fa fa-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
        </div>
    );
}

export default Education;