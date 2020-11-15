import i18next from 'i18next';

export const changeLanguage = () => {
    i18next.language === 'de' ? i18next.changeLanguage('en') : i18next.changeLanguage('de');
};

export default {
    changeLanguage
};