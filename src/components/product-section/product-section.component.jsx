import React from 'react';
import './product-section.styles.scss';
import watchImg from '../../assetts/apple_watch_s5_44m@2x.png'
const LandingSection = () => {
    return (
        <div className='product-section-container'>
            <div className='description-container'>
                <div className='description-wrapper'>
                <h1>Supereasy to customize</h1>
                <p>We can tailor our solutions for companies of all sizes.</p><br />
                <p>Donec auctor lorem sed nisl dapibus hendrerit. Mauris libero orci, ornare id tortor finibus, 
                    tristique sagittis libero. Sed nulla magna, consequat in orci quis, mattis varius odio. Integer finibus facilisis felis, 
                    cursus faucibus est suscipit sed. Nunc facilisis lorem sed sodales aliquam.</p>
                </div>

            </div>
            <div className='watch-img-container'>
                <img className='watch-img' src={watchImg}/>
            </div>
        </div>
    )
}

export default LandingSection;