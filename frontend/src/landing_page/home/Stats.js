import React from 'react';

function Stats() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-6">
                    <h2>Trust with Confidence</h2>

                    <h4> Customer-first always</h4>
                    <p>That's why 1.3+ crore customers trust zerodha with $4.7 thousand crore worth of equity investment
                    making us India’s largest broker; contributing to 15% of daily retail exchange volumes in 
                    India.
                    </p>

                    <h4> No spam or gimmicks</h4>
                    <p>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that 
                        you use at your pace, the way you like.<a href='/'>Our philosophies</a></p>

                    <h4> The Zerodha universe</h4>
                    <p>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you 
                        tailored services specific to your needs.</p>

                    <h4> Do better with money</h4>
                    <p>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively
                         help you do better with your money.</p>
                </div>
                <div className="col-6">
                    <img src='media/images/ecosystem.png' alt='ecosystem' style={{ width: "100%" }} />
                    <div className='text-center'>
                    <a href='/' className='p-3'>explore more!</a>
                    <a href='/' className='p-3'>Try kite</a>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Stats;