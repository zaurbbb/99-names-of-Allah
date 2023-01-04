import React, { useContext } from 'react';
import { FormattedMessage } from "react-intl";
import { CopyToClipboard } from "react-copy-to-clipboard";
import {
    Link,
    useParams
} from "react-router-dom";

import StarIcon from "../../ui/svg/StarIcon/StarIcon";
import Share from "../../ui/svg/ShareIcon/ShareIcon";
import PlayIcon from "../../ui/svg/PlayIcon/PlayIcon";

import css from "./NameDataCard.module.sass";
import QuestionIcon from "../../../assets/icons/namePage/questionIcon.svg";
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';
import { BookmarksContext } from '../../../context';
import { useMosque } from '../../../hooks/useMosque';

const NameDataCard = ({ name, item, id, nameArabic, shortMeaning, meaning, zikrCount, handleClickSnackbar, handleOpenModal }) => {
    const { nameId } = useParams();
    console.log('nameData', item);
    const url = window.location.href;
    const headingMessage = `${nameId} имя — ${name}`;
    const currentMosque = useMosque(nameId - 1);


    const { bookmarks, setBookmarks } = useContext(BookmarksContext);
    console.log(bookmarks);
    const bookmarkName = ({ item, id }) => {
        let array = bookmarks;
        let addArray = true;

        array.forEach((item, idx) => {
            if (item === id) {
                array.splice(idx, 1);
                addArray = false;
            }
        })

        if (addArray) {
            array.push(id);
        }

        setBookmarks([...array]);

        localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
        let storage = localStorage.getItem('bookmarkItem' + (id) || null);
        if (storage === null) {
            localStorage.setItem(('bookmarkItem' + (id)), JSON.stringify(item));
        } else {
            localStorage.removeItem('bookmarkItem' + (id));
        }
        console.log("доходит")
    }


    return (
        <>
            <CustomHeading value={headingMessage} />
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
                        <CopyToClipboard text={url}>
                            <Share onClick={handleClickSnackbar} />
                        </CopyToClipboard>
                    </div>
                    <div> {currentMosque} </div>
                    <div>
                        <div>
                            <h3>{name}</h3>
                            <h3>{shortMeaning}</h3>
                        </div>
                        <div>
                            <Link to='/unavailable'>
                                <PlayIcon />
                            </Link>
                        </div>
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
                            alt="question icon for opening modal window"
                            style={{ float: "right" }}
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
        </>
    );
};

export default NameDataCard;