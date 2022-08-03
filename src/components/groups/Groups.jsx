import React from 'react'
import AdminGroup from '../adminGroup/AdminGroup';
import MembersGroup from '../membersGroup/MembersGroup';
import './Groups.css'
const Groups = () => {
  return (
    <div className='groups'>   
        <div className="text">
            My Groups
        </div>
        <div className="admin_groups">
            <AdminGroup />
        </div>
        <div className="member_group">
            <MembersGroup />
        </div>
    </div>
  )
}

export default Groups;
