import React from 'react';
import qzone1 from '../../../assets/qZone1.png'
import qzone2 from '../../../assets/qZone3.png'
import qzone3 from '../../../assets/qZone2.png'

const QZone = () => {
    return (
        <div className='bg-secondary mt-2'>
            <h3>Q-Zone</h3>
            <div>
                <img src={qzone1} alt="" />
                <img src={qzone2} alt="" />
                <img src={qzone3} alt="" />
            </div>
        </div>
    );
};

export default QZone;