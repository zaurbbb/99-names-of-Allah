import { LOCALES } from './locales'
import { kzNames } from './names/kzNames';
import { ruNames } from './names/ruNames';
import { trNames } from './names/trNames';
import { kzWords } from './words/kzWords';
import { ruWords } from './words/ruWords';
import { trWords } from './words/trWords';

// w - words, n- names
export const messages = {
    [LOCALES.KAZAKH]: {
        w: kzWords,
        n: kzNames,
    },
    [LOCALES.RUSSIAN]: {
        w: ruWords,
        n: ruNames,
    },
    [LOCALES.TURKISH]: {
        w: trWords,
        n: trNames,
    },
}
