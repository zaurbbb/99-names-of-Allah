import React from 'react';

import CustomHeading from "../../ui/custom/CustomHeading/CustomHeading";
import Donation from "./Donation/Donation";
import SourceApp from "./SourceApp/SourceApp";
import OurTeam from "./OurTeam/OurTeam";

const AboutPage = () => {
    return (
        <>
            <section>
                <CustomHeading value='w.about_page_title_1' />
                <OurTeam />
            </section>

            <section>
                <CustomHeading value='w.about_page_title_2' />
                <SourceApp />
            </section>

            <section>
                <CustomHeading value='w.about_page_title_3' />
                <Donation />
            </section>
        </>
    );
};

export default AboutPage;