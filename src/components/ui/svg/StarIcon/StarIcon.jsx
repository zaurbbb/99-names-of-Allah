import React from 'react';

import { Badge } from "@mui/material";

import FilledStar from "./filledStar.svg";
import UnfilledStar from "./unfilledStar.svg";

const StarIcon = ({ variant, color, filled }) => {
    const icon = filled ? FilledStar : UnfilledStar;
    return (
        <Badge
            variant={variant}
            color={color}
        >
            <img
                src={icon}
                alt="star icon"
            />
        </Badge>
    );
};

export default StarIcon;