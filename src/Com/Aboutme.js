import React, { useState } from 'react';
import Profile from '../Photo/AboutMeDesk.png';

function Aboutme() {
    return (
        <>
            <div className='aboutme' id='Aboutme'>
                <div className='left' />
                <div className='right' />
                <div className='wrapper'>
                    <div className='ImageSection'>
                        <img src={Profile} alt='' className='Profile' />
                    </div>
                    <div className='Aboutme'>
                        <div className='Heading'>
                            <h3>About Me</h3>
                            <hr />
                        </div>
                        <div className='Body'>
                            <p>
                                Dolor sit amet, consectetur adipiscing elit. Penatibus amet, iaculis velit accumsan proin tortor purus ipsum. Et porttitor pellentesque est tortor sit. In in sit ornare maecenas.
                            </p>
                            <p>
                                Risus in posuere lectus justo urna. In integer sit ullamcorper mi elementum. Duis nunc cursus vitae quis eu laoreet nunc. Cras aenean nulla massa massa eget pretium sed arcu. Gravida risus venenatis quisque sed velit.ursus vitae quis eu laoreet nunc. Cras aenean nulla massa massa eget pretium sed arcu. Gravida risus venenatis quisque sed velit.
                            </p>
                        </div>
                        <button className='Download-btn'
                        >
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
            <hr className='line' />
        </>
    )
}

export default Aboutme
