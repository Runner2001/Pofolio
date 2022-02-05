import React from 'react';
import notfoundimage from '../Photo/Lost in thought.png';

const NotFound = () => {
    return (
        <div className='container-notfound'>
            <div className='notfound'>
                <img src={notfoundimage} alt="Not Found Image" />
                <div className='lost'>
                    <div className='text'>
                        <h3>Lost The Way ?</h3>
                        <p>We will sent you back. Click the button down below.</p>
                    </div>
                    <button className='btn'>Home</button>
                </div>

            </div>
        </div>
    );
};

export default NotFound;
