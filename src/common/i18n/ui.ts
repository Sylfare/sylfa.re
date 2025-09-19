import type { Themes } from "../css/themes/themes.ts";

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export const defaultLang: Language = "en";

export const languages = {
    en: "English",
    fr: "Français",
}

export type Language = keyof typeof languages;

export type i18nComplete = {
    site: {
        title: string,
    },
    settings: {
        open: string,
        close: string,
        title: string,
        themeTitle: string,
        themes: {[_ in Themes]: string},
    },
    buttons: {
        nekoweb: string,
        asexual: string,
        agender: string,
        validW3C: string,
        inclusivePride: string,
    },
    navigation: {
        previous: string,
        next: string,
        backToHome: string,
        backToCharacters: string,
        switchLanguage: string,
    },
    pages: {
        trucscools: {
            allTags: string,
            showAllTags: string,
            showTag: string,
            funny: string,
            tagSectionTitle: string,
            permalink: string,
            backToList: string,
        }
    }
};

export type i18nKeys = RecursivePartial<i18nComplete>;

export const ui: {[_ in Language]: i18nKeys} = {
    en: {
        site: {
            title: "Sylfare's armoire",
        },
        settings: {
            open: 'Settings',
            close: 'Close',
            title: "Site settings",
            themeTitle: 'Theme',
            themes: {
                "98": "98",
                "space": "Space"
            },
        },
        buttons: {
            asexual: "agender flag - make laugh, not war",
            nekoweb: "nekoweb - web is for cats",
            agender: "agender flag - gender? no thx",
            validW3C: "validated by W3C",
            inclusivePride: "inclusive pride flag",
        },
        navigation: {
            previous: "Previous",
            next: "Next",
            backToHome: "Back to home",
            backToCharacters: "Back to character list",
            switchLanguage: "en français"
        },
        pages: {
            trucscools: {
                allTags: "all",
                showAllTags: "Hey, are you looking for cool things?",
                funny: "come here",
                showTag: "Things with tag ",
                tagSectionTitle: "What are you looking for?",
                permalink: "Permalink",
                backToList: "See other cool things",
            }
        }
    },
    fr: {
        site: {
            title: "Le bazar du Sylfare"
        },
        settings: {
            open: 'Paramètres',
            close: 'Fermer',
            title: "Paramètres du site",
            themeTitle: 'Thème',
            themes: {
                "98": "98",
                "space": "Espace",
            }
        },
        buttons: {
            asexual: "drapeau asexuel - faites l'humour, pas la guerre",
            nekoweb: "nekoweb - le web est pour les chats",
            agender: "drapeau agenre - du genre ? non merci",
            validW3C: "validé par le W3C",
            inclusivePride: "drapeau progressif des fiertés",
        },
        navigation: {
            previous: "Précédent",
            next: "Suivant",
            backToHome: "Retour à l'accueil",
            backToCharacters: "Retour à la liste des personnages",
            switchLanguage: "in English",
        },
        pages: {
            trucscools: {
                allTags: "tout",
                funny: "viendez.",
                showAllTags: "Vous cherchez des trucs sympas ?",
                showTag: "Trucs avec le tag ",
                tagSectionTitle: "Que cherchez-vous ?",
                permalink: "Permalien",
                backToList: "Voir d'autres trucs sympas",
            }
        }
    }
} as const;
