import React from 'react';
import Profile from '../Photo/ProfileDesk.png';
import Openquote from '../icons/Openquote.svg';
import Closequote from '../icons/Closequote.svg';

function Hero() {
    return (
        <div className='herosection' id='Home'>
            <div className='imagePlace'>
                <div className='imageBack'>
                    <img src={Profile} alt="Profile Photo" />
                </div>
            </div>
            <div className='textPlace'>

                <div className='alltext'>
                    <img src={Openquote} className='open' />
                    <div className='wrap'>
                        <h6 className='caption'>Hello</h6>
                        <h2 className='hero'>I'm Runner</h2>
                        <p className='herotext'>
                            Frontend Developer & <br /> Ui/Ux Designer
                        </p>
                    </div>
                    <img src={Closequote} className='close' />
                </div>

            </div>
        </div>
    )
}

export default Hero
