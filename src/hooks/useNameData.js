import { useNamesCollection } from './useNamesCollection';
import { useParams } from 'react-router-dom';

export const useNameData = () => {
    const { nameId } = useParams();
    return useNamesCollection()[nameId];
};