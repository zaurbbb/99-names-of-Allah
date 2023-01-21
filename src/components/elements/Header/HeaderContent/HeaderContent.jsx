import React from 'react';

import css from './HeaderContent.module.sass';
import { FormattedMessage } from 'react-intl';

const HeaderContent = () => {
    return (
        <div className={css.TextBlock}>
            <div>
                <h1>
                    <FormattedMessage id='w.app_name' />
                </h1>
                <br />
                <h3>
                    <FormattedMessage id='w.main_block_title' />
                </h3>
            </div>
        </div>
    );
};

export default HeaderContent;