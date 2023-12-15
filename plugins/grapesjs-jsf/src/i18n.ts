import i18next from 'i18next';
import enBlocks from './locales/en/blocks.json';
import enTraits from './locales/en/traits.json';
import enCommon from './locales/en/common.json';

i18next.init({
    defaultNS: 'common',
    fallbackLng: 'en',
    resources:{
        en: {
            blocks: enBlocks,
            traits: enTraits,
            common: enCommon
        }
    }
});

export default i18next;