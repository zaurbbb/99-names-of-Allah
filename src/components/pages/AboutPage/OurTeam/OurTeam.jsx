import React from 'react';
import { FormattedMessage } from "react-intl";
import { Box } from "@mui/material";

import css from "./OurTeam.module.sass"
import Zaur from '../../../../assets/images/Zaur.webp';
import Meruert from '../../../../assets/images/Meruert.webp';
import Elaman from '../../../../assets/images/Elaman.webp';
import Kudaibergen from '../../../../assets/images/Kudaibergen.webp';


const OurTeam = () => {
    const list = [
        { name: 'meruert_name', description: 'meruert_description', img: Meruert },
        { name: 'kudaibergen_name', description: 'kudaibergen_description', img: Kudaibergen },
        { name: 'elaman_name', description: 'elaman_description', img: Elaman },
        { name: 'zaur_name', description: 'zaur_description', img: Zaur },
    ];
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
