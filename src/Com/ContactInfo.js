import React from 'react';

const ContactInfo = ({ copy, icons, title, color }) => {
    return (
        <div className='contact-box' style={{ background: color }}>
            <img src={copy} className="copy" />
            <div className='item'>
                <img src={icons} />
                <h3>{title}</h3>
            </div>
        </div>
    );
};

export default ContactInfo;
