import React from 'react';
import './staff-card.styles.scss';
import personOne from '../../assetts/person_one.png'
import personTwo from '../../assetts/person_two.png'
import personThree from '../../assetts/person_three.png'

const StaffCard = ({img, name, role}) => {

    const finalSrc = img === 1 ? personOne : img === 2 ? personTwo : personThree
    return (
        <div className='staff-card-container'>
            <img src={finalSrc}></img>
            <h2> {name} </h2>
            <p> {role} </p>
        </div>
    )
}

export default StaffCard;