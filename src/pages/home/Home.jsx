import React from 'react'
import Groups from '../../components/groups/Groups'
import PostSide from '../../components/postSide/PostSide'
import ProfileSide from '../../components/profile/ProfileSide'
import './Home.css'
const Home = () => {
  return (
    <div className='home'>
        <ProfileSide />
        <PostSide />
        <Groups />
    </div>
  )
}

export default Home