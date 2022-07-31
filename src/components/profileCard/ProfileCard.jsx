import React from 'react'
import Cover from '../../images/cover.jpg'
import Profile from '../../images/profileImg.jpg'
import './Profilecard.css'
const ProfileCard = () => {
  return (
    <div className='profileCard'>
        <div className="ProfileImages">
            <img src={Cover} alt='cover photo' />
            <img src={Profile} alt='cover photo' />
        </div>
        <div className="profileName">
            <span>Sonali Batra</span>
            <span>Designation</span>
        </div>
        <div className="followStatus">
            <hr />
            <div>
                <div className="follow">
                    <span>500</span>
                    <span>No.of Friends</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>3</span>
                    <span>No.of Groups</span>
                </div>
            </div>
            <hr />
        </div>
        <span>Edit Profile</span>
    </div>
  )
}

export default ProfileCard