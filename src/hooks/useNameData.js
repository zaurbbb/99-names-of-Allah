import { useNamesCollection } from './useNamesCollection';
import { useMosque } from './useMosque';
import { useParams } from 'react-router-dom';

export const useNameData = () => {
    const { nameId }    = useParams(),
          nameData      = useNamesCollection()[nameId - 1],

          meaning       = nameData.meaning,
          shortMeaning  = nameData.shortMeaning,
          currentMosque = useMosque(nameId),
          name          = nameData.name,
          nameArabic    = nameData.nameArabic,
          zikrCount     = nameData.zikrCount;
    return [meaning, shortMeaning, nameId, currentMosque, name, nameArabic, zikrCount];
};