import React from 'react'
import AboutMe from '../aboutMe/AboutMe'
import Interestes from '../interests/Interestes'
import './PostSide.css'
const PostSide = () => {
  return (
    <div className='postSide'>
        <AboutMe / >
          <Interestes />
    </div>
  )
}

export default PostSide