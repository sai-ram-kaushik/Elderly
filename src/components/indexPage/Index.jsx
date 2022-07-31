import React from 'react'
import { AccountBox } from '../accountBox';
import './index.css'

const Index = () => {
    return (
        <div className="indexPage">
            <div className="text">
                <div className="text_header">
                    <div>
                        Elderly
                    </div>
                </div>
                <div className="acc_box">
                    <AccountBox />
                </div>
            </div>
        </div>
    )
}

export default Index;
