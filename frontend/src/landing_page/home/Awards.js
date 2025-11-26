import React from 'react';

function Awards() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6">
                    <img src='media/images/largestBroker.svg' alt='largestBroker' />
                </div>
                <div className="col-6">
                    <h1>Largest Broker in India</h1>
                    <p>We are the largest broker in India, with a market share of 25% in the Indian stock market.</p>

                    <div className="row">
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>Futures & Options</p>
                                </li>
                                <li>
                                    <p>Commodity derivatives</p>
                                </li>
                                <li>
                                    <p>currency derivatives</p>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul>
                                <li>
                                    <p>stock & IPOs</p>
                                </li>
                                <li>
                                    <p>Direct mutual funds</p>
                                </li>
                                <li>
                                    <p>Bonds and Goverment</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                     

                     
                </div>
            </div>
        </div>
    );
}

export default Awards;