import React, { useState } from 'react';
import phone from '../icons/phone.svg';
import copy from '../icons/copy.svg';
import mail from '../icons/mail.svg';
import telegram from '../icons/send.svg';
import address from '../icons/map.svg';
import ContactInfo from './ContactInfo';
import linkin from '../icons/linkedin.svg';
import github from '../icons/github.svg'

const Contact = () => {
    const [info, seTinfo] = useState([
        { id: 1, name: "Phone", svg: phone, color: "#0FF750" },
        { id: 2, name: "Mail", svg: mail, color: "#FFB703" },
        { id: 3, name: "Telegram", svg: telegram, color: "#7E48F1" },
        { id: 4, name: "Address", svg: address, color: "#48B4F1" },
    ]);
    return <div className='Contact'>
        <h3>Get in touch with us</h3>
        <h4>Contact with one touch</h4>
        <p>Let go and talk about bussiness. Get in touch and let us to help you.
            Your life will more much easier.</p>

        <div className='contact-grid' >
            {info.map(item => {
                return (
                    <ContactInfo title={item.name} icons={item.svg} copy={copy} color={item.color} key={item.id} />
                );
            })}
        </div>
        <div className='social-page'>
            <div className='each'>
                <img src={linkin} />
                <h3>Linkedin</h3>
            </div>
            <div className='each'>
                <img src={github} />
                <h3>GitHub</h3>
            </div>
        </div>
    </div>;
};

export default Contact;
