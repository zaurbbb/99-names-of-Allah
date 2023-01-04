import React, { useContext } from 'react';

import CustomHeading from "../../ui/custom/CustomHeading/CustomHeading";
import NamesList from "./NamesList/NamesList";
import StarIcon from "../../ui/svg/StarIcon/StarIcon";
import { Link } from "react-router-dom";
import { BookmarksContext } from '../../../context';
import { useNamesCollection } from '../../../hooks/useNamesCollection';
import { useChunks } from '../../../hooks/useChunks';

const MainPage = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const namesCollection = useNamesCollection();
    const result = useChunks(namesCollection, 9);
    return (
        <section>
            <CustomHeading value={'w.the_most_beautiful_names_text'}>
                <Link to='/bookmarks'>
                    <StarIcon
                        variant="dot"
                        color={bookmarks.length !== 0 ? "success" : "secondary"}
                        badgeContent={bookmarks.length !== 0 && 0}
                        filled={bookmarks.length !== 0}
                    />
                </Link>
            </CustomHeading>
            <NamesList result={result}/>
        </section>
    );
};

export default MainPage;