import React from 'react';

function Title(props) {
    const {title} = props;
    return (
        <div className='titleHeader'>
            <h2 className='title'>{title}</h2>
        </div>
    );
};

export default Title;