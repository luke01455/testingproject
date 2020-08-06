import React from 'react';
import InstructionCard from '../instruction-card/instruction-card.component'
import './instruction-section.styles.scss';
import iconOne from '../../assetts/benefit_one_icon.svg'
import iconTwo from '../../assetts/benefit_two_icon.svg'
import iconThree from '../../assetts/benefit_three_icon.svg'


const InstructionSection = () => {
    return (
        <div className='instruction-section-container'>
            <InstructionCard name='One' img={1} text='Firstly we will plan all the nessesary
elements in your profect.'/>
            <InstructionCard name='Two' img={2} text='Our professional designers will make
a special and fascinating design.'/>
            <InstructionCard name='Three' img={3} text='We will develop all your ideas
and make the project alive.'/>
        </div>
    )
}

export default InstructionSection;