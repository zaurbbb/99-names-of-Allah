import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { BookmarksContext } from '../../../context/bookmarks';
import { WindowWidthContext } from '../../../context/windowWidth';

import { useNamesCollection } from '../../../hooks/useNamesCollection';
import { useChunks } from '../../../hooks/useChunks';

import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import NamesList from '../../elements/NamesList/NamesList';
import StarIcon from '../../ui/svg/StarIcon/StarIcon';

const MainPage = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const { windowWidth } = useContext(WindowWidthContext);
    const namesCollection = useNamesCollection();
    const result = useChunks(namesCollection, 9);

    return (
        <section>
            <CustomHeading value={'w.the_most_beautiful_names_text'}>
                {bookmarks.length !== 0 ?
                    <Link to='/bookmarks'>
                        <StarIcon
                            variant='dot'
                            color='success'
                            badgeContent={0}
                            filled={true}
                        />
                    </Link> : <StarIcon
                        variant='dot'
                        color='secondary'
                        filled={false}
                    />
                }
            </CustomHeading>
            <NamesList result={windowWidth > 576 ? result : namesCollection} />
        </section>
    );
};

export default MainPage;