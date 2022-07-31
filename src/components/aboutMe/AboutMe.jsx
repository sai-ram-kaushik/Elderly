import React from 'react'
import './AboutMe.css';
const AboutMe = () => {
    return (
        <div className='aboutMe'>
            <textarea type='text' cols={100} rows={15} placeholder='About Me'/>
            <div className="edit-btn">
                <button className='btn'>Save</button>
            </div>
        </div>
    )
}

export default AboutMe;