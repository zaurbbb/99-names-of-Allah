import React, {
    useContext,
    useState
} from 'react';

import { SnackbarContext } from '../../../context/snackbar';

import { useNameData } from '../../../hooks/useNameData';
import { useParams } from 'react-router-dom';

import NameDataCard from '../../cards/NameDataCard/NameDataCard';
import SourceModal from './SourceModal/SourceModal';
import SnackbarWindow from '../../ui/windows/SnackbarWindow/SnackbarWindow';
import CustomHeading from '../../ui/custom/CustomHeading/CustomHeading';

const NamePage = () => {
    const { nameId } = useParams();
    const { openSnackbar, handleCloseSnackbar } = useContext(SnackbarContext);
    const nameData = useNameData();

    const [openModal, setOpenModal] = useState(false);
    const handleOpenModal = () => setOpenModal(true);
    const handleCloseModal = () => setOpenModal(false);

    const headingMessage = `${nameId} имя — ${nameData.name}`;

    return (
        <section>
            <CustomHeading value={headingMessage} />
            <NameDataCard
                key={nameData.id}
                item={nameData}
                id={nameData.id}
                nameArabic={nameData.nameArabic}
                name={nameData.name}
                shortMeaning={nameData.shortMeaning}
                meaning={nameData.meaning}
                zikrCount={nameData.zikrCount}
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