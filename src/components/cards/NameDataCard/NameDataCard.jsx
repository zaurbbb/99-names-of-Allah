import React, { useContext } from 'react';
import {
    Link,
    useParams
} from 'react-router-dom';

import { FormattedMessage } from 'react-intl';

import { BookmarksContext } from '../../../context/bookmarks';

import { useMosque } from '../../../hooks/useMosque';
import { useBookmarkName } from '../../../hooks/useBookmarkName';

import StarIcon from '../../ui/svg/StarIcon/StarIcon';
import PlayIcon from '../../ui/svg/PlayIcon/PlayIcon';
import ShareUrl from '../../elements/ShareUrl/ShareUrl';

import css from './NameDataCard.module.sass';

import QuestionIcon from '../../../assets/icons/namePage/questionIcon.svg';

const NameDataCard = ({
    name,
    item,
    id,
    nameArabic,
    shortMeaning,
    meaning,
    zikrCount,
    handleOpenModal
}) => {
    const { nameId } = useParams();
    const { bookmarks } = useContext(BookmarksContext);
    const { bookmarkName } = useBookmarkName();
    const currentMosque = useMosque(nameId - 1);
    const nextNameId = +nameId === 99 ? 1 : +nameId + 1;
    const prevNameId = +nameId === 1 ? 99 : +nameId - 1;

    return (
        <div className={css.Block}>
            <div className={css.UpperCard}>
                <div>
                    <div>
                        <StarIcon
                            filled={!!bookmarks.includes(id)}
                            onClick={() => bookmarkName({ item, id })}
                        />
                    </div>
                    <div>
                        <h2>{nameArabic}</h2>
                    </div>
                    <ShareUrl />
                </div>
                <div> {currentMosque} </div>
                <div>
                    <Link to={`/name/${prevNameId}`}>
                        <PlayIcon reverse={true} />
                    </Link>
                    <div>
                        <h3>{name}</h3>
                        <h3>{shortMeaning}</h3>
                    </div>
                    <Link to={`/name/${nextNameId}`}>
                        <PlayIcon />
                    </Link>
                </div>
            </div>
            <div className={css.MiddleCard}>
                <div>
                    <h3><FormattedMessage id='w.one_name_full_description' /></h3>
                </div>
                <div>
                    <h4>{meaning}</h4>
                </div>
            </div>
            <div className={css.LowerCard}>
                <div>
                    <div></div>
                    <h3><FormattedMessage id='w.one_name_zikr_text1' /></h3>
                    <img
                        src={QuestionIcon}
                        alt='question icon for opening modal window'
                        style={{ float: 'right' }}
                        onClick={handleOpenModal}
                    />
                </div>
                <div>
                    <h4>
                        <FormattedMessage id='w.one_name_zikr_text2' />
                        <br />
                        <br />
                        <FormattedMessage id='w.one_name_zikr_text3' />
                        <span className={css.zikrCount}>
                            {zikrCount}
                        </span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default NameDataCard;