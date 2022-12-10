import React from 'react';

import Heading from "../../ui/heading/Heading";
import NamesList from "./namesList/NamesList";
import Star from "../../ui/star/Star";

const MainPage = () => {
    return (
        <section className='container'>
            <Heading value={'w.the_most_beautiful_names_text'}>
                <Star
                    variant="dot"
                    color="success"
                    filled={true}
                />
            </Heading>
            <NamesList/>
        </section>
    );
};

export default MainPage;