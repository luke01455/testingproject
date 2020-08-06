import React from 'react';
import StaffCard from '../staff-card/staff-card.component'
import './staff-section.styles.scss';


const StaffSection = () => {
    return (
        <div className='staff-section-container'>
            <div className='staff-header'>
                <h1> Meet Our Team</h1>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>
            </div>
            <div className='staff-cards'>
                <StaffCard img={1} name='Jane Smith' role='Company CEO'/>
                <StaffCard img={2} name='Mary Jane' role='Lead Designer'/>
                <StaffCard img={3} name='John Doe' role='Lead Developer'/>
            </div>

        </div>
    )
}

export default StaffSection;