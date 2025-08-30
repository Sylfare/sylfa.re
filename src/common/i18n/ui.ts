import type { Themes } from "../css/themes/themes.ts";

type RecursivePartial<T> = {
    [P in keyof T]?: RecursivePartial<T[P]>;
};

export const defaultLang = "en";

export const languages = {
    en: "English",
    fr: "Français",
}

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
    }
};

export type i18nKeys = RecursivePartial<i18nComplete>;

export const ui: {[_ in keyof typeof languages]: i18nKeys} = {
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
        }
    }
} as const;
