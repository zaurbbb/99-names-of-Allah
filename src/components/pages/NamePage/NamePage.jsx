import React from 'react';

import { useNameData } from "../../../hooks/useNameData";

import Heading from "../../ui/Heading/Heading";
import NameCards from "./NameCards/NameCards";


const NamePage = () => {
    const [
              meaning,
              shortMeaning,
              nameId,
              currentMosque,
              name,
              nameArabic,
              zikrCount,
          ] = useNameData();
    const headingMessage = `${nameId} имя — ${name}`;

    return (
        <section>
            <Heading value={headingMessage} />
            <NameCards
                meaning={meaning}
                shortMeaning={shortMeaning}
                currentMosque={currentMosque}
                name={name}
                nameArabic={nameArabic}
                zikrCount={zikrCount}
            />
        </section>
    );
};

export default NamePage;