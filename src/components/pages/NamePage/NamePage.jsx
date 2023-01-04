import React, { useState } from 'react';

import { useNameData } from '../../../hooks/useNameData';

import NameDataCard from '../../cards/NameDataCard/NameDataCard';
import SourceModal from './SourceModal/SourceModal';
import SnackbarWindow from '../../ui/windows/SnackbarWindow/SnackbarWindow';

const NamePage = () => {
    const nameData = useNameData();

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const [openSnackbar, setOpenSnackbar] = useState(false);
    const handleClickSnackbar = () => {
        setOpenSnackbar(true);
    };

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') return;

        setOpenSnackbar(false);
    };

    return (
        <section>
            <NameDataCard
                key={nameData.id}
                item={nameData}
                id={nameData.id}
                nameArabic={nameData.nameArabic}
                name={nameData.name}
                shortMeaning={nameData.shortMeaning}
                meaning={nameData.meaning}
                zikrCount={nameData.zikrCount}
                handleClickSnackbar={handleClickSnackbar}
                handleOpenModal={handleOpenModal}
            />

            <SourceModal
                open={openModal}
                onClose={handleCloseModal}
            />

            <SnackbarWindow
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
            />
        </section>
    );
};

export default NamePage;