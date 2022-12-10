import React from 'react';

import Heading from "../../ui/Heading/Heading";
import NamesList from "./NamesList/NamesList";
import Star from "../../ui/Star/Star";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <section>
            <Heading value={'w.the_most_beautiful_names_text'}>
                <Link to='/bookmarks'>
                    <Star
                        variant="dot"
                        color="success"
                        filled={true}
                    />
                </Link>
            </Heading>
            <NamesList />
        </section>
    );
};

export default MainPage;