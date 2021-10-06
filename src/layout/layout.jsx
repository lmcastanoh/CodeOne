import React from 'react'
import Footer from 'components/Footer';
import Header from 'components/Header';


const layout = ({Children}) => {
    return (
        <div className='mainContainer'>
            <Header />
            <main>{Children}</main>
            <Footer />
        </div>
    );
};

export default layout
