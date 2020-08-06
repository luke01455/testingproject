import React from 'react';
import Header from '../header/header.component'
import CTAbutton from '../cta-button/cta-button.component'
import './landing-section.styles.scss';

const LandingSection = () => {
    return (
        <div className='landing-section-container'>
            <Header />
            <div className='CTA-text-container'>
                <h1> LANDING PROMO PAGE </h1>
                <h3>Phasellus hendrerit justo sed massa eleifend, in bibendum felis consectetur. Morbi finibus orci ut
                        turpis tincidunt ornare. Donec ultrices ipsum turpis.</h3>
            <CTAbutton />
            </div>
        </div>
    )
}

export default LandingSection;