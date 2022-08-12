import React from 'react';
import img from '../../images/email.jpg';
import './Subscrie.css';
const SubscribeOne = () => {
    return (
        <section className="mailchimp-one">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="mailchimp-one__content">
                            <div className="mailchimp-one__icon">
                                <i className="kipso-icon-email">
                                    <img className="img-email" src={img} ></img>
                                </i>
                                <h2 className="mailchimp-one__title">Get latest courses <br />
                                    updates by signing up
                                </h2>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 d-flex">
                        <div className="my-auto">
                            <form action="#" className="mailchimp-one__form mc-form">
                                <div className="your__email">
                                    <input type="text" id="mc-email" placeholder="Enter your email" />
                                </div>
                                <div>
                                    <button type="submit" className="thm-btn">Subscribe</button>
                                </div>
                            </form>
                            <div className="mc-form__response"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default SubscribeOne;
