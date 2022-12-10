import React from 'react';

import ShareButton from './shareButton.svg';

const ShareIcon = (props) => {
    return (
        <img
            {...props}
            src={ShareButton}
            alt='icon'
        />
    );
};

export default ShareIcon;