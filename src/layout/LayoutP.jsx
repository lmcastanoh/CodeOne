import React from 'react'
import Footer from 'components/Footer';

const LayoutP = ({Children}) => {
    return (
        <div className='mainContainer'>
            <div>{Children}</div>
            <Footer />
        </div>
    );
};

export default LayoutP;
