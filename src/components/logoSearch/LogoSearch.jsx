import React from 'react'
import Logo from '../../images/logo1.png'
import {BsSearch} from 'react-icons/bs'  
import './LogoSearch.css'
const LogoSearch = () => {
  return (
    <div className='logoSearch'>
        <img src={Logo} alt='' />
        {/* <div className="search_input">
            <input type='text' placeholder='#Explore' />
            <div className="s-icon">
                <BsSearch />
            </div>
        </div> */}
    </div>
  )
}

export default LogoSearch;