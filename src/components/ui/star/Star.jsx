import React from 'react';

import {Badge} from "@mui/material";

import FilledStar from "./filledStar.svg";
import EmptyStar from "./emptyStar.svg";

const Star = ({variant, color, filled}) => {
    return (
        <Badge
            variant={variant}
            color={color}
        >
            <img src={filled ? FilledStar : EmptyStar} alt="star icon for sharing to bookmarks"/>
        </Badge>
    );
};

export default Star;