import React, { useContext } from 'react';

import { Link } from 'react-router-dom';

import { BookmarksContext } from '../../../context/bookmarks';
import { WindowWidthContext } from '../../../context/windowWidth';

import { useNamesCollection } from '../../../hooks/useNamesCollection';
import { useChunks } from '../../../hooks/useChunks';

import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import NamesSwiperList from '../../lists/NamesSwiperList/NamesSwiperList';
import StarIcon from '../../ui/svg/StarIcon/StarIcon';

const MainPage = () => {
    const { bookmarks } = useContext(BookmarksContext);
    const { isSmallDevice } = useContext(WindowWidthContext);
    const namesCollection = useNamesCollection(isSmallDevice ? 3 : undefined);
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
            <NamesSwiperList result={isSmallDevice ? namesCollection : result} />
        </section>
    );
};

export default MainPage;