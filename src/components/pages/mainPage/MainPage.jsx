import React from 'react';

import Heading from "../../ui/heading/Heading";
import NamesList from "./namesList/NamesList";
import Star from "../../ui/star/Star";
import { Link } from "react-router-dom";

const MainPage = () => {
    return (
        <section className='container'>
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