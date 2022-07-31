import React from 'react'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profile/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <ProfileSide />
        <PostSide />
        <div className="rightSide">
            right side
        </div>
    </div>
  )
}

export default Home