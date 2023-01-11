import React, {
    useContext,
    useEffect,
    useState
} from 'react';
import CongratulationsModal from './CongratulationsModal/CongratulationsModal';
import ResultsModal from './ResultsModal/ResultsModal';
import SnackbarWindow from '../../ui/windows/SnackbarWindow/SnackbarWindow';
import { SnackbarContext } from '../../../context/snackbar';
import { QuizContext } from '../../../context/quiz';

const QuizWindows = () => {
    const [quizState] = useContext(QuizContext);
    const { openSnackbar, handleCloseSnackbar } = useContext(SnackbarContext);

    const [openCongratulationsModal, setOpenCongratulationsModal] = useState(false);
    const handleOpenCongratulationsModal = () => setOpenCongratulationsModal(true);
    const handleCloseCongratulationsModal = () => setOpenCongratulationsModal(false);

    const [openResultsModal, setOpenResultsModal] = useState(false);
    const handleOpenResultsModal = () => setOpenResultsModal(true);
    const handleCloseResultsModal = () => setOpenResultsModal(false);


    useEffect(() => {
        quizState.showResults && handleOpenCongratulationsModal();
    }, [quizState]);

    return (
        <>
            <CongratulationsModal
                open={openCongratulationsModal}
                onClose={handleCloseCongratulationsModal}
                openResults={handleOpenResultsModal}
            />
            <ResultsModal
                open={openResultsModal}
                onClose={handleCloseResultsModal}
            />
            <SnackbarWindow
                openSnackbar={openSnackbar}
                handleCloseSnackbar={handleCloseSnackbar}
            />
        </>
    );
};

export default QuizWindows;