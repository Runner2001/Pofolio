import React, { useState } from 'react';
import Design from '../Photo/Design.png';
import Web from '../Photo/Web.png';
import illustrator from '../Photo/3D.png';
import Mobile from '../Photo/Mobile.png';

function Project() {

    const [projectPhoto, setProjectPhoto] = useState([
        { id: 1, image: Design, alt: "Design Photo", name: "Ui/Ux Design", css: "Design" },
        { id: 2, image: Web, alt: "Web Photo", name: "Web Site", css: "Web" },
        { id: 3, image: illustrator, alt: "3D Photo", name: "3D illustrator", css: "Illustrator" },
        { id: 4, image: Mobile, alt: "Mobile Photo", name: 'Mobile App', css: "Mobile" },
    ])

    return (
        <div className='ProjectSection' id='Project'>
            <div className='projectHeader'>
                <h2>My Project</h2>
                <p className='projectText'>
                    Sit nunc vel tempus, in ipsum pretium, pharetra, pellentesque viverra.
                    Suspendisse suspendisse feugiat quam dictum
                    feugiat habitasse neque at.
                </p>
            </div>
            <div className='projectBody'>
                {projectPhoto.map(item => (
                    <div className={`box ${item.css}`} key={item.id}>
                        <img src={item.image} alt={item.alt} />
                        <h3>{item.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Project
