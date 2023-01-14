import React, { useContext } from 'react';

import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SnackbarContext } from '../../../context/snackbar';

import ShareIcon from '../../ui/svg/ShareIcon/ShareIcon';

const ShareUrl = ({ iconColor }) => {
    const { handleClickSnackbar } = useContext(SnackbarContext);
    const url = window.location.href;

    return (
        <CopyToClipboard text={url}>
            <ShareIcon
                onClick={handleClickSnackbar}
                color={iconColor}
            />
        </CopyToClipboard>
    );
};

export default ShareUrl;