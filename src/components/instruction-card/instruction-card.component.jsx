import React from 'react';
import './instruction-card.styles.scss';
import {ReactComponent as ReactLogo1} from '../../assetts/benefit_one_icon.svg'
import {ReactComponent as ReactLogo2} from '../../assetts/benefit_two_icon.svg'
import {ReactComponent as ReactLogo3} from '../../assetts/benefit_three_icon.svg'


const InstructionCard = ({name, img, text}) => {
    return (
        <div className='instruction-card-container'>
              {img === 1 ? <ReactLogo1 /> : img === 2 ? <ReactLogo2 /> : <ReactLogo3 /> }
             <h3> Benefit {name} </h3>
             <p> {text}</p>
        </div>
    )
}

export default InstructionCard;