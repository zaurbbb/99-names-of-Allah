import React from 'react';

import Heading from "../../ui/Heading/Heading";
import Donation from "./Donation/Donation";
import SourceApp from "./SourceApp/SourceApp";
import OurTeam from "./OurTeam/OurTeam";

const AboutPage = () => {
    return (
        <>
            <section>
                <Heading value='w.about_page_title_1' />
                <OurTeam />
            </section>

            <section>
                <Heading value='w.about_page_title_2' />
                <SourceApp />
            </section>

            <section>
                <Heading value='w.about_page_title_3' />
                <Donation />
            </section>
        </>
    );
};

export default AboutPage;