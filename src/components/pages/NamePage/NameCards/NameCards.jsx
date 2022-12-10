import React, { useState } from 'react';
import { FormattedMessage } from "react-intl";
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Star from "../../../ui/StarIcon/Star";
import Play from "../../../ui/Play/Play";
import Share from "../../../ui/ShareIcon/ShareIcon";


import css from "./NameCards.module.sass"
import QuestionIcon from '../../../../assets/icons/namePage/question.svg'
import {
    Alert,
    Snackbar
} from "@mui/material";


const NameCards = ({
                       meaning,
                       shortMeaning,
                       currentMosque,
                       name,
                       nameArabic,
                       zikrCount,
                   }) => {
    console.log(name)
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpenSnackbar(false);
    };

    const url = window.location.href;
    return (
        <div className={css.Block}>
            <div className={css.FirstCard}>
                <div>
                    <div>
                        <Star />
                    </div>
                    <div>
                        <h2>
                            {nameArabic}
                        </h2>
                    </div>
                    <CopyToClipboard text={url}>
                        <Share
                            onClick={handleClickSnackbar}
                        />
                    </CopyToClipboard>
                </div>
                <div>
                    <img
                        src={currentMosque}
                        alt="mosque"
                    />
                </div>
                <div>
                    <div>
                        <h3>
                            {name}
                        </h3>
                        <h3>
                            {shortMeaning}
                        </h3>
                    </div>
                    <div>
                        <a href="https://google.com">
                            <Play />
                        </a>
                    </div>
                </div>
            </div>
            <div className={css.SecondCard}>
                <div>
                    <h3>
                        <FormattedMessage id='w.one_name_full_description' />
                    </h3>
                </div>
                <div>
                    <h4>
                        {meaning}
                    </h4>
                </div>
            </div>
            <div className={css.ThirdCard}>
                <div>
                    <div>

                    </div>
                    <h3>
                        <FormattedMessage id='w.one_name_zikr_text1' />
                    </h3>
                    <img
                        src={QuestionIcon}
                        alt="question icon for opening modal window"
                        style={{ float: "right" }}
                        // onClick={handleOpenModal}
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
            {/*<Modal*/}
            {/*    open={openModal}*/}
            {/*    onClose={handleCloseModal}*/}
            {/*    aria-labelledby="modal-modal-title"*/}
            {/*    aria-describedby="modal-modal-description"*/}

            {/*>*/}
            {/*    <Box className={css.ModalContainer}>*/}
            {/*        <Typography*/}
            {/*            variant="h6"*/}
            {/*            color="primary.main"*/}
            {/*        >*/}
            {/*            {t("ONE_NAME_FULL_DESCRIPTION")}*/}
            {/*        </Typography>*/}
            {/*        <br />*/}
            {/*        <Typography variant="subtitle1">*/}
            {/*            {t("MODAL_TEXT")}*/}
            {/*        </Typography>*/}
            {/*        <br />*/}
            {/*        <img*/}
            {/*            src={SourceImg}*/}
            {/*            alt="view of the book"*/}
            {/*        />*/}
            {/*        <br />*/}
            {/*        <Typography*/}
            {/*            variant="subtitle1"*/}
            {/*            style={{ textAlign: 'center' }}*/}
            {/*        >*/}
            {/*            {t("ABOUT_PAGE_SUBTITLE_1")}*/}
            {/*            <a href="https://github.com">fatua.kz</a>*/}
            {/*            {t("ABOUT_PAGE_SUBTITLE_2")}*/}
            {/*        </Typography>*/}
            {/*    </Box>*/}
            {/*</Modal>*/}
            <Snackbar
                open={openSnackbar}
                autoHideDuration={4000}
                onClose={handleCloseSnackbar}
            >
                <Alert
                    onClose={handleCloseSnackbar}
                    severity="success"
                >
                    <FormattedMessage id='w.one_name_copy_to_clipboard' />
                </Alert>
            </Snackbar>
        </div>
    );
};

export default NameCards;
