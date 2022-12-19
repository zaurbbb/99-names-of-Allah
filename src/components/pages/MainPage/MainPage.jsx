import React from 'react';

import CustomHeading from "../../ui/custom/CustomHeading/CustomHeading";
import NamesList from "./NamesList/NamesList";
import StarIcon from "../../ui/svg/StarIcon/StarIcon";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <section>
            <CustomHeading value={'w.the_most_beautiful_names_text'}>
                <Link to='/bookmarks'>
                    <StarIcon
                        variant="dot"
                        color="success"
                        filled={true}
                    />
                </Link>
            </CustomHeading>
            <NamesList />
        </section>
    );
};

export default MainPage;