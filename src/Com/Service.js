import React, { useState } from 'react'
import Pen from '../icons/pen.svg';
import Web from '../icons/code.svg';
import Search from '../icons/search.svg';
import HeaderCom from './HeaderCom';

function Service() {

    const [services, setservices] = useState([
        { id: 1, text: 'Ui/Ux', icons: Pen },
        { id: 2, text: 'Web/App', icons: Web },
        { id: 3, text: 'Research', icons: Search }
    ])
    return (
        <>
            <div className='ServiceSection' id='Service'>
                <HeaderCom title="Services">
                    <p>Sit nunc vel tempus, in ipsum pretium, pharetra, pellentesque viverra. Suspendisse suspendisse feugiat quam dictum feugiat habitasse neque at.</p>
                </HeaderCom>
                <div className='Body'>
                    {services.map(item => (
                        <div className='Box' key={item.id}
                        >
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            <img src={item.icons} />
                            <h3>{item.text}</h3>
                        </div>
                    ))}
                </div>
            </div>
            <hr className='section' />
        </>
    )

}

export default Service
