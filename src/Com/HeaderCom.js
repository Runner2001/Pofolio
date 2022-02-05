import React from 'react';

const HeaderCom = ({ title, children }) => {
    return <div className='Header'>
        <h3>{title}</h3>
        {children}
    </div>;
};

export default HeaderCom;
