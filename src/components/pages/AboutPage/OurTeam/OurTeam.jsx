import React from 'react';

import { Box } from "@mui/material";
import { FormattedMessage } from "react-intl";

import {list} from '../../../../data/ourTeam';

import css from './OurTeam.module.sass';


const OurTeam = () => {

    return (

        <Box
            sx={{
                display       : 'flex',
                justifyContent: 'center',
                gap           : '1rem',
                flexWrap      : 'wrap'
            }}
        >
            {list.map((person, index) =>
                <div className={css.Block} key={index}>
                    <div
                        className={css.ImageElement}
                        style={{
                            background      : `url(${person.img})`,
                            backgroundSize  : '100%',
                        }}
                    >
                    </div>
                    <div>
                        <h4><FormattedMessage id={`w.${person.name}`} /></h4>
                        <h5><FormattedMessage id={`w.${person.description}`} /></h5>
                    </div>
                </div>
            )}

        </Box>
    );
};

export default OurTeam;
