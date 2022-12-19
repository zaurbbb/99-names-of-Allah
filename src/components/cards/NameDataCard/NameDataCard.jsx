import React from 'react';
import { FormattedMessage } from "react-intl";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";

import StarIcon from "../../ui/svg/StarIcon/StarIcon";
import Share from "../../ui/svg/ShareIcon/ShareIcon";
import PlayIcon from "../../ui/svg/PlayIcon/PlayIcon";

import css from "./NameDataCard.module.sass";
import QuestionIcon from "../../../assets/icons/namePage/questionIcon.svg";
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const NameDataCard = ({ nameData, handleClickSnackbar, handleOpenModal }) => {
    const [
              meaning,
              shortMeaning,
              nameId,
              currentMosque,
              name,
              nameArabic,
              zikrCount,
          ] = nameData;

    const url            = window.location.href,
          headingMessage = `${nameId} имя — ${name}`;

    return (
        <>
            <CustomHeading value={headingMessage} />
            <div className={css.Block}>
                <div className={css.UpperCard}>
                    <div>
                        <div><StarIcon /></div>
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